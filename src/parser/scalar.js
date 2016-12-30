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
          var isDoubleQuote = false;
          var isBinCast = value[0] === 'b' || value[0] === 'B';
          if (isBinCast) {
            isDoubleQuote = text[1] === '"';
            text = text.substring(2, text.length - 1);
          } else {
            isDoubleQuote = text[0] === '"';
            text = text.substring(1, text.length - 1);
          }
          this.next();
          value = value(isDoubleQuote, this.resolve_special_chars(text));
          if (isBinCast) {
            value = ['cast', 'binary', value];
          }
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            return this.read_static_getter(value);
          } else {
            // dirrect string
            return value;
          }
        case this.tok.T_START_HEREDOC:
          return this.next().read_encapsed_string(
            this.tok.T_END_HEREDOC
          );
        case '"':
          return this.next().read_encapsed_string('"');
        case 'b"':
        case 'B"':
          return ['cast', 'binary', this.next().read_encapsed_string('"')];

        // NUMERIC
        case '-':  // long
        case this.tok.T_LNUMBER:  // long
        case this.tok.T_DNUMBER:  // double
          var result = this.node('number');
          var value = this.text();
          if (this.token === '-') {
            this.next().expect([this.tok.T_LNUMBER, this.tok.T_DNUMBER]);
            value += this.text();
          }
          result = result(value);
          this.next();
          return result;

        // CONSTANTS
        case this.tok.T_NAMESPACE:
        case this.tok.T_NS_SEPARATOR:
        case this.tok.T_STRING:
          var value = this.read_namespace_name();
          var result = ['constant', value];
          if ( this.token == this.tok.T_DOUBLE_COLON) {
            // class constant  MyClass::CONSTANT
            if (this.next().expect([this.tok.T_STRING, this.tok.T_CLASS])) {
              result[1] = [value, this.text()];
              this.next();
            }
          }
          // CONSTANT ARRAYS OFFSET : MYCONST[1][0]...
          while(this.token === '[') {
            result = ['offset', result, this.next().read_expr()];
            if (this.expect(']')) this.next();
          }
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
    if (this.token === '[') {
      result = ['offset', expr, this.next().read_expr()];
      if (this.expect(']')) this.next();
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      result = ['offset', expr, this.read_encapsed_string_item()];
    }
    return result;
  }
  /**
   * ```ebnf
   * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE
   *  | T_DOLLAR_OPEN_CURLY_BRACES expr '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
   *  | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
   *  | variable
   *  | T_CURLY_OPEN variable '}'
   * ```
   */
  ,read_encapsed_string_item: function() {
    var result = null;
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      result = this.node('string')(false, this.text());
      this.next();
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        result = ['var', this.text()];
        if (this.next().token === '[') {
          result = ['offset', result, this.next().read_expr()];
          if (this.expect(']')) this.next();
        }
      } else {
        result = this.read_expr();
      }
      if (this.expect('}')) this.next();
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      result = this.next().read_variable(false, false, false);
      if (this.expect('}')) this.next();
    } else if (this.token === '[') {
      result = ['offset', result, this.next().read_expr()];
      if (this.expect(']')) this.next();
    } else if (this.token === this.tok.T_VARIABLE) {
      result = this.read_variable(false, true, false);
    } else {
      this.expect([
        this.tok.T_VARIABLE,
        this.tok.T_CURLY_OPEN,
        this.tok.T_DOLLAR_OPEN_CURLY_BRACES,
        this.tok.T_ENCAPSED_AND_WHITESPACE
      ]);
    }
    return result;
  }
  /**
   * Reads an encapsed string
   */
  ,read_encapsed_string: function(expect) {
    if (this.token === expect) {
      this.next();
      return null; // empty
    }
    var first = this.read_encapsed_string_item();
    if (this.token === expect) {
      this.next();
      return first;
    }
    var result = [
      'bin', '.'
      , first
      , this.read_encapsed_string_item()
    ];
    while(this.token !== expect) {
      result[3] = [
        'bin', '.', result[3], this.read_encapsed_string_item()
      ];
    }
    if (this.expect(expect)) this.next();
    return result;
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
