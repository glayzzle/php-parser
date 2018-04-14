/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * reading a list of top statements (helper for top_statement*)
   * ```ebnf
   *  top_statements ::= top_statement*
   * ```
   */
  read_top_statements: function() {
    let result = [];
    while (this.token !== this.EOF && this.token !== "}") {
      const statement = this.read_top_statement();
      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }
    return result;
  },
  /**
   * reading a top statement
   * ```ebnf
   *  top_statement ::=
   *       namespace | function | class
   *       | interface | trait
   *       | use_statements | const_list
   *       | statement
   * ```
   */
  read_top_statement: function() {
    switch (this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL: {
        const flag = this.read_class_scope();
        if (this.token === this.tok.T_CLASS) {
          return this.read_class(flag);
        } else {
          this.error(this.tok.T_CLASS);
          this.next();
          return null;
        }
      }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_USE:
        return this.read_use_statement();
      case this.tok.T_CONST:
        return this.next().read_const_list();
      case this.tok.T_NAMESPACE:
        return this.read_namespace();
      case this.tok.T_HALT_COMPILER: {
        const result = this.node("halt");
        if (this.next().expect("(")) this.next();
        if (this.expect(")")) this.next();
        this.expect(";");
        this.lexer.done = true;
        return result(this.lexer._input.substring(this.lexer.offset));
      }
      default:
        return this.read_statement();
    }
  },
  /**
   * reads a list of simple inner statements (helper for inner_statement*)
   * ```ebnf
   *  inner_statements ::= inner_statement*
   * ```
   */
  read_inner_statements: function() {
    let result = [];
    while (this.token != this.EOF && this.token !== "}") {
      const statement = this.read_inner_statement();
      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }
    return result;
  },
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  read_const_list: function() {
    const result = this.read_list(
      function() {
        this.expect(this.tok.T_STRING);
        const result = this.node("constant");
        const name = this.text();
        if (this.next().expect("=")) {
          return result(name, this.next().read_expr());
        } else {
          // fallback
          return result(name, null);
        }
      },
      ",",
      false
    );
    this.expectEndOfStatement();
    return result;
  },
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   declare_list ::= T_STRING '=' expr (',' T_STRING '=' expr)*
   * ```
   * @retrurn {Object}
   */
  read_declare_list: function() {
    const result = {};
    while (this.token != this.EOF && this.token !== ")") {
      this.expect(this.tok.T_STRING);
      const name = this.text().toLowerCase();
      if (this.next().expect("=")) {
        result[name] = this.next().read_expr();
      } else {
        result[name] = null;
      }
      if (this.token !== ",") break;
      this.next();
    }
    return result;
  },
  /**
   * reads a simple inner statement
   * ```ebnf
   *  inner_statement ::= '{' inner_statements '}' | token
   * ```
   */
  read_inner_statement: function() {
    switch (this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL: {
        const flag = this.read_class_scope();
        if (this.token === this.tok.T_CLASS) {
          return this.read_class(flag);
        } else {
          this.error(this.tok.T_CLASS);
          // graceful mode : ignore token & go next
          this.next();
          return null;
        }
      }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_HALT_COMPILER: {
        this.raiseError(
          "__HALT_COMPILER() can only be used from the outermost scope"
        );
        // fallback : returns a node but does not stop the parsing
        let node = this.node("halt");
        this.next().expect("(") && this.next();
        this.expect(")") && this.next();
        node = node(this.lexer._input.substring(this.lexer.offset));
        this.expect(";") && this.next();
        return node;
      }
      default:
        return this.read_statement();
    }
  },
  /**
   * Reads statements
   */
  read_statement: function() {
    let result, expr, items, current, label;
    switch (this.token) {
      case "{":
        return this.read_code_block(false);

      case this.tok.T_IF:
        return this.read_if();

      case this.tok.T_SWITCH:
        return this.read_switch();

      case this.tok.T_FOR:
        return this.next().read_for();

      case this.tok.T_FOREACH:
        return this.next().read_foreach();

      case this.tok.T_WHILE:
        return this.next().read_while();

      case this.tok.T_DO:
        return this.next().read_do();

      case this.tok.T_COMMENT:
        return this.read_comment();

      case this.tok.T_DOC_COMMENT:
        return this.read_doc_comment();

      case this.tok.T_RETURN:
        result = this.node("return");
        expr = null;
        if (!this.next().is("EOS")) {
          expr = this.read_expr();
        }
        this.expectEndOfStatement();
        return result(expr);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L429
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE: {
        result = this.node(
          this.token === this.tok.T_CONTINUE ? "continue" : "break"
        );
        let level = null;
        this.next(); // look ahead
        if (this.token !== ";") {
          level = this.read_expr();
        }
        this.expectEndOfStatement();
        return result(level);
      }

      case this.tok.T_GLOBAL:
        result = this.node("global");
        items = this.next().read_list(this.read_simple_variable, ",");
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_STATIC:
        current = [this.token, this.lexer.getState()];
        result = this.node("static");
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          expr = this.next().read_expr();
          this.expect(";") && this.next();
          return expr;
        }
        if (this.token === this.tok.T_FUNCTION) {
          return this.read_function(true, [0, 1, 0]);
        }
        items = this.read_variable_declarations();
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_ECHO: {
        result = this.node("echo");
        const text = this.text();
        const shortForm = text === "<?=" || text === "<%=";
        const args = this.next().read_list(this.read_expr, ",");
        this.expectEndOfStatement();
        return result(args, shortForm);
      }

      case this.tok.T_INLINE_HTML: {
        const value = this.text();
        let prevChar =
          this.lexer.yylloc.first_offset > 0
            ? this.lexer._input[this.lexer.yylloc.first_offset - 1]
            : null;
        const fixFirstLine = prevChar === "\r" || prevChar === "\n";
        // revert back the first stripped line
        if (fixFirstLine) {
          if (
            prevChar === "\n" &&
            this.lexer.yylloc.first_offset > 1 &&
            this.lexer._input[this.lexer.yylloc.first_offset - 2] === "\r"
          ) {
            prevChar = "\r\n";
          }
        }
        result = this.node("inline");
        this.next();
        return result(value, fixFirstLine ? prevChar + value : value);
      }

      case this.tok.T_UNSET:
        result = this.node("unset");
        this.next().expect("(") && this.next();
        items = this.read_list(this.read_variable, ",");
        this.expect(")") && this.next();
        this.expect(";") && this.next();
        return result(items);

      case this.tok.T_DECLARE: {
        result = this.node("declare");
        const body = [];
        let mode;
        this.next().expect("(") && this.next();
        const what = this.read_declare_list();
        this.expect(")") && this.next();
        if (this.token === ":") {
          this.next();
          while (
            this.token != this.EOF &&
            this.token !== this.tok.T_ENDDECLARE
          ) {
            // @todo : check declare_statement from php / not valid
            body.push(this.read_top_statement());
          }
          this.expect(this.tok.T_ENDDECLARE) && this.next();
          this.expectEndOfStatement();
          mode = this.ast.declare.MODE_SHORT;
        } else if (this.token === "{") {
          this.next();
          while (this.token != this.EOF && this.token !== "}") {
            // @todo : check declare_statement from php / not valid
            body.push(this.read_top_statement());
          }
          this.expect("}") && this.next();
          mode = this.ast.declare.MODE_BLOCK;
        } else {
          this.expect(";") && this.next();
          mode = this.ast.declare.MODE_NONE;
        }
        return result(what, body, mode);
      }

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW:
        result = this.node("throw");
        expr = this.next().read_expr();
        this.expectEndOfStatement();
        return result(expr);

      case ";": // ignore this (extra ponctuation)
        this.next();
        return null;

      case this.tok.T_STRING:
        current = [this.token, this.lexer.getState()];
        label = this.text();
        // AST : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L457
        if (this.next().token === ":") {
          result = this.node("label");
          this.next();
          return result(label);
        }

        // default fallback expr / T_STRING '::' (etc...)
        this.lexer.tokens.push(current);
        expr = this.next().read_expr();
        this.expectEndOfStatement();
        return expr;

      case this.tok.T_GOTO:
        result = this.node("goto");
        label = null;
        if (this.next().expect(this.tok.T_STRING)) {
          label = this.text();
          this.next().expectEndOfStatement();
        }
        return result(label);

      default:
        // default fallback expr
        expr = this.read_expr();
        this.expectEndOfStatement();
        return expr;
    }
  },
  /**
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  read_code_block: function(top) {
    const result = this.node("block");
    this.expect("{") && this.next();
    const body = top
      ? this.read_top_statements()
      : this.read_inner_statements();
    this.expect("}") && this.next();
    return result(null, body);
  }
};
