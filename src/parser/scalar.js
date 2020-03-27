/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const specialChar = {
  "\\": "\\",
  $: "$",
  n: "\n",
  r: "\r",
  t: "\t",
  f: String.fromCharCode(12),
  v: String.fromCharCode(11),
  e: String.fromCharCode(27),
};

module.exports = {
  /**
   * Unescape special chars
   */
  resolve_special_chars: function (text, doubleQuote) {
    if (!doubleQuote) {
      // single quote fix
      return text.replace(/\\\\/g, "\\").replace(/\\'/g, "'");
    }
    return text
      .replace(/\\"/, '"')
      .replace(
        /\\([\\$nrtfve]|[xX][0-9a-fA-F]{1,2}|[0-7]{1,3}|u{([0-9a-fA-F]+)})/g,
        ($match, p1, p2) => {
          if (specialChar[p1]) {
            return specialChar[p1];
          } else if ("x" === p1[0] || "X" === p1[0]) {
            return String.fromCodePoint(parseInt(p1.substr(1), 16));
          } else if ("u" === p1[0]) {
            return String.fromCodePoint(parseInt(p2, 16));
          } else {
            return String.fromCodePoint(parseInt(p1, 8));
          }
        }
      );
  },

  /**
   * Remove all leading spaces each line for heredoc text if there is a indentation
   * @param {string} text
   * @param {number} indentation
   * @param {boolean} indentation_uses_spaces
   * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
   */
  remove_heredoc_leading_whitespace_chars: function (
    text,
    indentation,
    indentation_uses_spaces,
    first_encaps_node
  ) {
    if (indentation === 0) {
      return text;
    }

    this.check_heredoc_indentation_level(
      text,
      indentation,
      indentation_uses_spaces,
      first_encaps_node
    );

    const matchedChar = indentation_uses_spaces ? " " : "\t";
    const removementRegExp = new RegExp(
      `\\n${matchedChar}{${indentation}}`,
      "g"
    );
    const removementFirstEncapsNodeRegExp = new RegExp(
      `^${matchedChar}{${indentation}}`
    );

    // Rough replace, need more check
    if (first_encaps_node) {
      // Remove text leading whitespace
      text = text.replace(removementFirstEncapsNodeRegExp, "");
    }

    // Remove leading whitespace after \n
    return text.replace(removementRegExp, "\n");
  },

  /**
   * Check indentation level of heredoc in text, if mismatch, raiseError
   * @param {string} text
   * @param {number} indentation
   * @param {boolean} indentation_uses_spaces
   * @param {boolean} first_encaps_node if it is behind a variable, the first N spaces should not be removed
   */
  check_heredoc_indentation_level: function (
    text,
    indentation,
    indentation_uses_spaces,
    first_encaps_node
  ) {
    const textSize = text.length;
    let offset = 0;
    let leadingWhitespaceCharCount = 0;
    /**
     * @var inCoutingState {boolean} reset to true after a new line
     */
    let inCoutingState = true;
    const chToCheck = indentation_uses_spaces ? " " : "\t";
    let inCheckState = false;
    if (!first_encaps_node) {
      // start from first \n
      offset = text.indexOf("\n");
      // if no \n, just return
      if (offset === -1) {
        return;
      }
      offset++;
    }
    while (offset < textSize) {
      if (inCoutingState) {
        if (text[offset] === chToCheck) {
          leadingWhitespaceCharCount++;
        } else {
          inCheckState = true;
        }
      } else {
        inCoutingState = false;
      }

      if (
        text[offset] !== "\n" &&
        inCheckState &&
        leadingWhitespaceCharCount < indentation
      ) {
        this.raiseError(
          `Invalid body indentation level (expecting an indentation at least ${indentation})`
        );
      } else {
        inCheckState = false;
      }

      if (text[offset] === "\n") {
        // Reset counting state
        inCoutingState = true;
        leadingWhitespaceCharCount = 0;
      }
      offset++;
    }
  },

  /**
   * Reads dereferencable scalar
   */
  read_dereferencable_scalar: function () {
    let result = null;

    switch (this.token) {
      case this.tok.T_CONSTANT_ENCAPSED_STRING:
        {
          let value = this.node("string");
          const text = this.text();
          let offset = 0;
          if (text[0] === "b" || text[0] === "B") {
            offset = 1;
          }
          const isDoubleQuote = text[offset] === '"';
          this.next();
          const textValue = this.resolve_special_chars(
            text.substring(offset + 1, text.length - 1),
            isDoubleQuote
          );
          value = value(
            isDoubleQuote,
            textValue,
            offset === 1, // unicode flag
            text
          );
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            result = this.read_static_getter(value);
          } else {
            // dirrect string
            result = value;
          }
        }
        break;
      case this.tok.T_ARRAY: // array parser
        result = this.read_array();
        break;
      case "[": // short array format
        result = this.read_array();
        break;
    }

    return result;
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
  read_scalar: function () {
    if (this.is("T_MAGIC_CONST")) {
      return this.get_magic_constant();
    } else {
      let value, node;
      switch (this.token) {
        // NUMERIC
        case this.tok.T_LNUMBER: // long
        case this.tok.T_DNUMBER: {
          // double
          const result = this.node("number");
          value = this.text();
          this.next();
          return result(value, null);
        }
        case this.tok.T_START_HEREDOC:
          if (this.lexer.curCondition === "ST_NOWDOC") {
            const start = this.lexer.yylloc.first_offset;
            node = this.node("nowdoc");
            value = this.next().text();
            // strip the last line return char
            if (this.lexer.heredoc_label.indentation > 0) {
              value = value.substring(
                0,
                value.length - this.lexer.heredoc_label.indentation
              );
            }
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
            this.expect(this.tok.T_END_HEREDOC) && this.next();
            const raw = this.lexer._input.substring(
              start,
              this.lexer.yylloc.first_offset
            );
            node = node(
              this.remove_heredoc_leading_whitespace_chars(
                value,
                this.lexer.heredoc_label.indentation,
                this.lexer.heredoc_label.indentation_uses_spaces,
                this.lexer.heredoc_label.first_encaps_node
              ),
              raw,
              this.lexer.heredoc_label.label
            );
            return node;
          } else {
            return this.read_encapsed_string(this.tok.T_END_HEREDOC);
          }

        case '"':
          return this.read_encapsed_string('"');

        case 'b"':
        case 'B"': {
          return this.read_encapsed_string('"', true);
        }

        // TEXTS
        case this.tok.T_CONSTANT_ENCAPSED_STRING:
        case this.tok.T_ARRAY: // array parser
        case "[": // short array format
          return this.read_dereferencable_scalar();
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
  read_dereferencable: function (expr) {
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
  read_encapsed_string_item: function (isDoubleQuote) {
    const encapsedPart = this.node("encapsedpart");
    let syntax = null;
    let curly = false;
    let result = this.node(),
      offset,
      node,
      name;

    // plain text
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1222
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      const text = this.text();
      this.next();

      // if this.lexer.heredoc_label.first_encaps_node -> remove first indents
      result = result(
        "string",
        false,
        this.version >= 703 && !this.lexer.heredoc_label.finished
          ? this.remove_heredoc_leading_whitespace_chars(
              this.resolve_special_chars(text, isDoubleQuote),
              this.lexer.heredoc_label.indentation,
              this.lexer.heredoc_label.indentation_uses_spaces,
              this.lexer.heredoc_label.first_encaps_node
            )
          : text,
        false,
        text
      );
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      syntax = "simple";
      curly = true;
      // dynamic variable name
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1239
      name = null;
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        name = this.node("variable");
        const varName = this.text();
        this.next();
        // check if lookup an offset
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1243
        if (this.token === "[") {
          name = name(varName, false);
          node = this.node("offsetlookup");
          offset = this.next().read_expr();
          this.expect("]") && this.next();
          result = node(name, offset);
        } else {
          result = name(varName, false);
        }
      } else {
        result = result("variable", this.read_expr(), false);
      }
      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      // expression
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1246
      syntax = "complex";
      result.destroy();
      result = this.next().read_variable(false, false);
      this.expect("}") && this.next();
    } else if (this.token === this.tok.T_VARIABLE) {
      syntax = "simple";
      // plain variable
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1231
      result.destroy();
      result = this.read_simple_variable();

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
        this.next().expect(this.tok.T_STRING);
        const what = this.node("identifier");
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
      result.destroy();
      result = result("string", false, value, false, value);
    }

    // reset first_encaps_node to false after access any node
    this.lexer.heredoc_label.first_encaps_node = false;
    return encapsedPart(result, syntax, curly);
  },
  /**
   * Reads an encapsed string
   */
  read_encapsed_string: function (expect, isBinary = false) {
    const labelStart = this.lexer.yylloc.first_offset;
    let node = this.node("encapsed");
    this.next();
    const start = this.lexer.yylloc.prev_offset - (isBinary ? 1 : 0);
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
    if (
      value.length > 0 &&
      value[value.length - 1].kind === "encapsedpart" &&
      value[value.length - 1].expression.kind === "string"
    ) {
      const node = value[value.length - 1].expression;
      const lastCh = node.value[node.value.length - 1];
      if (lastCh === "\n") {
        if (node.value[node.value.length - 2] === "\r") {
          // windows style
          node.value = node.value.substring(0, node.value.length - 2);
        } else {
          // linux style
          node.value = node.value.substring(0, node.value.length - 1);
        }
      } else if (lastCh === "\r") {
        // mac style
        node.value = node.value.substring(0, node.value.length - 1);
      }
    }
    this.expect(expect) && this.next();
    const raw = this.lexer._input.substring(
      type === "heredoc" ? labelStart : start - 1,
      this.lexer.yylloc.first_offset
    );
    node = node(value, raw, type);

    if (expect === this.tok.T_END_HEREDOC) {
      node.label = this.lexer.heredoc_label.label;
      this.lexer.heredoc_label.finished = true;
    }
    return node;
  },
  /**
   * Constant token
   */
  get_magic_constant: function () {
    const result = this.node("magic");
    const name = this.text();
    this.next();
    return result(name.toUpperCase(), name);
  },
};
