/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const specialChar = {
  "\\r": "\r",
  "\\n": "\n",
  "\\t": "\t",
  "\\v": String.fromCharCode(11),
  "\\e": String.fromCharCode(27),
  "\\f": String.fromCharCode(12),
  "\\\\": "\\",
  "\\$": "$",
  '\\"': '"',
  "\\'": "'"
};

module.exports = {
  /**
   * Unescape special chars
   */
  resolve_special_chars: function(text, doubleQuote) {
    if (!doubleQuote) {
      // single quote fix
      return text.replace(/\\['\\]/g, function(seq) {
        return specialChar[seq];
      });
    }
    return text.replace(/\\[rntvef"'\\$]/g, function(seq) {
      return specialChar[seq];
    });
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
    if (this.is("T_MAGIC_CONST")) {
      return this.get_magic_constant();
    } else {
      let value, node;
      switch (this.token) {
        // TEXTS
        case this.tok.T_CONSTANT_ENCAPSED_STRING: {
          value = this.node("string");
          const text = this.text();
          let offset = 0;
          if (text[0] === "b" || text[0] === "B") {
            offset = 1;
          }
          const isDoubleQuote = text[offset] === '"';
          this.next();
          value = value(
            isDoubleQuote,
            this.resolve_special_chars(
              text.substring(offset + 1, text.length - 1),
              isDoubleQuote
            ),
            text
          );
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            return this.read_static_getter(value);
          } else {
            // dirrect string
            return value;
          }
        }
        case this.tok.T_START_HEREDOC:
          if (this.lexer.curCondition === "ST_NOWDOC") {
            const start = this.lexer.yylloc.first_offset;
            node = this.node("nowdoc");
            value = this.next().text();
            // strip the last line return char
            const lastCh = value[value.length - 1];
            if (lastCh === "\n") {
              if (value[value.length - 2] === "\r") {
                // windows style
                value = value.substring(0, value.length - 2);
              } else {
                // linux style
                value = value.substring(0, value.length - 1);
              }
            } else if (lastCh === "\r") {
              // mac style
              value = value.substring(0, value.length - 1);
            }
            this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE) && this.next();
            const raw = this.lexer._input.substring(
              start,
              this.lexer.yylloc.last_offset
            );
            node = node(
              value,
              raw,
              this.lexer.heredoc_label,
              raw[3] === '"' || raw[3] === "'"
            );
            this.expect(this.tok.T_END_HEREDOC) && this.next();
            return node;
          } else {
            return this.next().read_encapsed_string(this.tok.T_END_HEREDOC);
          }

        case '"':
          return this.next().read_encapsed_string('"');

        case 'b"':
        case 'B"': {
          this.next();
          this.lexer.yylloc.prev_offset -= 1;
          return this.read_encapsed_string('"');
        }

        // NUMERIC
        case this.tok.T_LNUMBER: // long
        case this.tok.T_DNUMBER: {
          // double
          const result = this.node("number");
          value = this.text();
          this.next();
          return result(value, null);
        }

        // ARRAYS
        case this.tok.T_ARRAY: // array parser
        case "[": // short array format
          return this.read_array();
        default: {
          const err = this.error("SCALAR");
          // graceful mode : ignore token & return error node
          this.next();
          return err;
        }
      }
    }
  },
  /**
   * Handles the dereferencing
   */
  read_dereferencable: function(expr) {
    let result, offset;
    const node = this.node("offsetlookup");
    if (this.token === "[") {
      offset = this.next().read_expr();
      if (this.expect("]")) this.next();
      result = node(expr, offset);
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      offset = this.read_encapsed_string_item(false);
      result = node(expr, offset);
    }
    return result;
  },
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
  read_encapsed_string_item: function(isDoubleQuote) {
    let result = this.node(),
      offset,
      node,
      name;

    // plain text
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1222
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      const text = this.text();
      this.next();
      result = result(
        "string",
        false,
        this.resolve_special_chars(text, isDoubleQuote),
        text
      );
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      // dynamic variable name
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1239
      name = null;
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        const varName = this.text();
        name = this.node("variable");
        this.next();
        // check if lookup an offset
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1243
        if (this.token === "[") {
          name = name(varName, false);
          node = this.node("offsetlookup");
          offset = this.next().read_expr();
          this.expect("]") && this.next();
          name = node(name, offset);
        } else {
          name = this.node("constref")(varName);
        }
      } else {
        name = this.read_expr();
      }
      this.expect("}") && this.next();
      result = result("variable", name, false, true);
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      // expression
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1246
      result = this.next().read_variable(false, false, false);
      if (result.kind === "variable") {
        result.curly = true;
      }
      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_VARIABLE) {
      // plain variable
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1231
      result = this.read_simple_variable(false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1233
      if (this.token === "[") {
        node = this.node("offsetlookup");
        offset = this.next().read_encaps_var_offset();
        this.expect("]") && this.next();
        result = node(result, offset);
      }

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1236
      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        node = this.node("propertylookup");
        const what = this.node("constref");
        this.next().expect(this.tok.T_STRING);
        name = this.text();
        this.next();
        result = node(result, what(name));
      }

      // error / fallback
    } else {
      this.expect(this.tok.T_ENCAPSED_AND_WHITESPACE);
      const value = this.text();
      this.next();
      // consider it as string
      result = result("string", false, value, value);
    }

    return result;
  },
  /**
   * Reads an encapsed string
   */
  read_encapsed_string: function(expect) {
    const start = this.lexer.yylloc.prev_offset;
    let node = this.node("encapsed");
    const value = [];
    let type = null;

    if (expect === "`") {
      type = this.ast.encapsed.TYPE_SHELL;
    } else if (expect === '"') {
      type = this.ast.encapsed.TYPE_STRING;
    } else {
      type = this.ast.encapsed.TYPE_HEREDOC;
    }

    // reading encapsed parts
    while (this.token !== expect && this.token !== this.EOF) {
      value.push(this.read_encapsed_string_item(true));
    }

    this.expect(expect) && this.next();
    node = node(
      value,
      this.lexer._input.substring(start - 1, this.lexer.yylloc.first_offset),
      type
    );

    if (expect === this.tok.T_END_HEREDOC) {
      node.label = this.lexer.heredoc_label;
    }
    return node;
  },
  /**
   * Constant token
   */
  get_magic_constant: function() {
    const result = this.node("magic");
    const name = this.text();
    this.next();
    return result(name.toUpperCase(), name);
  }
};
