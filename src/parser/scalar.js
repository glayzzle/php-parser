/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var specialChar = {
  '\\r': "\r",
  '\\n': "\n",
  '\\t': "\t",
  '\\v': String.fromCharCode(11),
  '\\e': String.fromCharCode(27),
  '\\f': String.fromCharCode(12),
  "\\\\": "\\",
  '\\$': "$",
  '\\"': '"',
  '\\\'': "'"
};

module.exports = {
  /**
   * Unescape special chars
   */
  resolve_special_chars: function(text) {
    return text.replace(
      /\\[rntvef"'\\\$]/g,
      function(seq) {
        return specialChar[seq];
      }
    );
  },
  /**
   * ```ebnf
   *  scalar ::= T_MAGIC_CONST
   *       | T_LNUMBER | T_DNUMBER
   *       | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC
   *       | '"' encaps_list '"'
   *       | T_START_HEREDOC encaps_list T_END_HEREDOC
   *       | namespace_name (T_DOUBLE_COLON T_STRING)?
   * ```
   */
  read_scalar: function() {
    if (this.is('T_MAGIC_CONST')) {
      return this.get_magic_constant();
    } else {
      switch(this.token) {

        // TEXTS
        case this.tok.T_CONSTANT_ENCAPSED_STRING:
          var value = this.node('string');
          var text = this.text();
          var isDoubleQuote = text[0] === '"';
          text = text.substring(1, text.length - 1);
          this.next();
          value = value(isDoubleQuote, this.resolve_special_chars(text));
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            return this.read_static_getter(value);
          } else {
            // dirrect string
            return value;
          }
        case this.tok.T_START_HEREDOC:
          if (this.lexer.curCondition === 'ST_NOWDOC') {
            var node = this.node('nowdoc');
            var value = this.next().text();
            // strip the last line return char
            var lastCh = value[value.length-1];
            if (lastCh === '\n') {
              if (value[value.length-2] === '\r') {
                // windows style
                value = value.substring(0, value.length - 2);
              } else {
                // linux style
                value = value.substring(0, value.length - 1);
              }
            } else if (lastCh === '\r') {
              // mac style
              value = value.substring(0, value.length - 1);
            }
            this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE) && this.next();
            node = node(value, this.lexer.heredoc_label);
            this.expect(this.tok.T_END_HEREDOC) && this.next();
            return node;
          } else {
            return this.next().read_encapsed_string(
              this.tok.T_END_HEREDOC
            );
          }

        case '"':
          return this.next().read_encapsed_string('"');

        case 'b"':
        case 'B"':
          var node = this.node('cast');
          var what = this.next().read_encapsed_string('"');
          return node('binary', what);

        // NUMERIC
        case this.tok.T_LNUMBER:  // long
        case this.tok.T_DNUMBER:  // double
          var result = this.node('number');
          var value = this.text();
          this.next();
          result = result(value);
          return result;

        // ARRAYS
        case this.tok.T_ARRAY:  // array parser
        case '[':             // short array format
          return this.read_array();
        default:
          var err = this.error('SCALAR');
          // graceful mode : ignore token & return error node
          this.next();
          return err;
      }
    }
  }
  /**
   * Handles the dereferencing
   */
  ,read_dereferencable: function(expr) {
    var result;
    var node = this.node('offsetlookup');
    if (this.token === '[') {
      var offset = this.next().read_expr();
      if (this.expect(']')) this.next();
      result = node(expr, offset);
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      var offset = this.read_encapsed_string_item();
      result = node(expr, offset);
    }
    return result;
  }
  /**
   * Reads and extracts an encapsed item
   * ```ebnf
   * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
   *  | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
   *  | T_CURLY_OPEN variable '}'
   *  | variable
   *  | variable '[' expr ']'
   *  | variable T_OBJECT_OPERATOR T_STRING
   * ```
   * @return {String|Variable|Expr|Lookup}
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1219
   */
  ,read_encapsed_string_item: function() {
    var result = this.node();

    // plain text
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1222
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      var text = this.text();
      this.next();
      result = result(
        'string', false, this.resolve_special_chars(text)
      );
    }

    // dynamic variable name
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1239
    else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      var name = null;
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        var varName = this.text();
        name = this.node('variable');
        this.next();
        // check if lookup an offset
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1243
        if (this.token === '[') {
          name = name(varName, false);
          var node = this.node('offsetlookup');
          var offset = this.next().read_expr();
          this.expect(']') && this.next();
          name = node(name, offset);
        } else {
          name = varName;
        }
      } else {
        name = this.read_expr();
      }
      this.expect('}') && this.next();
      result = result('variable', name, false, true);
    }

    // expression
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1246
    else if (this.token === this.tok.T_CURLY_OPEN) {
      result = this.next().read_variable(false, false, false);
      this.expect('}') && this.next();
    }

    // plain variable
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1231
    else if (this.token === this.tok.T_VARIABLE) {
      result = this.read_simple_variable(false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1233
      if (this.token === '[') {
        var node = this.node('offsetlookup');
        var offset = this.next().read_encaps_var_offset();
        this.expect(']') && this.next();
        result = node(result, offset);
      }

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1236
      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        var node = this.node('propertylookup');
        var what = this.node('constref');
        this.next().expect(this.tok.T_STRING);
        var name = this.text();
        this.next();
        result = node(result, what(name));
      }

    // error / fallback
    } else {
      this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE);
      var value = this.text();
      this.next();
      // consider it as string
      result = result('string', false, value);
    }

    return result;
  }
  /**
   * Reads an encapsed string
   */
  ,read_encapsed_string: function(expect) {
    var node = this.node('encapsed'), value = [], type = null;

    if (expect === '`') {
      type = this.ast.encapsed.TYPE_SHELL;
    } else if (expect === '"') {
      type = this.ast.encapsed.TYPE_STRING;
    } else {
      type = this.ast.encapsed.TYPE_HEREDOC;
    }

    // reading encapsed parts
    while(this.token !== expect && this.token !== this.EOF) {
      value.push(this.read_encapsed_string_item());
    }

    this.expect(expect) && this.next();
    node = node(value, type);

    if (expect === this.tok.T_END_HEREDOC) {
      node.label = this.lexer.heredoc_label;
    }
    return node;
  }
  /**
   * Constant token
   */
  ,get_magic_constant: function() {
    var result = this.node('magic');
    var name = this.text();
    this.next();
    return result(name);
  }
};
