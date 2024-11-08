/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
   * reading a list of top statements (helper for top_statement*)
   * ```ebnf
   *  top_statements ::= top_statement*
   * ```
   */
  read_top_statements: function () {
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
  /*
   * reading a top statement
   * ```ebnf
   *  top_statement ::=
   *       namespace | function | class
   *       | interface | trait
   *       | use_statements | const_list
   *       | statement
   * ```
   */
  read_top_statement: function () {
    let attrs = [];
    if (this.token === this.tok.T_ATTRIBUTE) {
      attrs = this.read_attr_list();
    }
    switch (this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false, attrs);
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
      case this.tok.T_READ_ONLY:
      case this.tok.T_CLASS:
        return this.read_class_declaration_statement(attrs);
      case this.tok.T_INTERFACE:
        return this.read_interface_declaration_statement(attrs);
      case this.tok.T_TRAIT:
        return this.read_trait_declaration_statement();
      case this.tok.T_ENUM:
        return this.read_enum_declaration_statement(attrs);
      case this.tok.T_USE:
        return this.read_use_statement();
      case this.tok.T_CONST: {
        const result = this.node("constantstatement");
        const items = this.next().read_const_list();
        this.expectEndOfStatement();
        return result(null, items);
      }
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
  /*
   * reads a list of simple inner statements (helper for inner_statement*)
   * ```ebnf
   *  inner_statements ::= inner_statement*
   * ```
   */
  read_inner_statements: function () {
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
  /*
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  read_const_list: function () {
    return this.read_list(
      function () {
        this.expect(this.tok.T_STRING);
        const result = this.node("constant");
        let constName = this.node("identifier");
        const name = this.text();
        this.next();
        constName = constName(name);
        if (this.expect("=")) {
          return result(constName, this.next().read_expr());
        } else {
          // fallback
          return result(constName, null);
        }
      },
      ",",
      false,
    );
  },
  /*
   * Reads a list of constants declaration
   * ```ebnf
   *   declare_list ::= IDENTIFIER '=' expr (',' IDENTIFIER '=' expr)*
   * ```
   * @retrurn {Array}
   */
  read_declare_list: function () {
    const result = [];
    while (this.token != this.EOF && this.token !== ")") {
      this.expect(this.tok.T_STRING);
      const directive = this.node("declaredirective");
      let key = this.node("identifier");
      const name = this.text();
      this.next();
      key = key(name);
      let value = null;
      if (this.expect("=")) {
        value = this.next().read_expr();
      }
      result.push(directive(key, value));
      if (this.token !== ",") break;
      this.next();
    }
    return result;
  },
  /*
   * reads a simple inner statement
   * ```ebnf
   *  inner_statement ::= '{' inner_statements '}' | token
   * ```
   */
  read_inner_statement: function () {
    let attrs = [];
    if (this.token === this.tok.T_ATTRIBUTE) {
      attrs = this.read_attr_list();
    }
    switch (this.token) {
      case this.tok.T_FUNCTION: {
        const result = this.read_function(false, false);
        result.attrGroups = attrs;
        return result;
      }
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
      case this.tok.T_CLASS:
        return this.read_class_declaration_statement();
      case this.tok.T_INTERFACE:
        return this.read_interface_declaration_statement();
      case this.tok.T_TRAIT:
        return this.read_trait_declaration_statement();
      case this.tok.T_ENUM:
        return this.read_enum_declaration_statement();
      case this.tok.T_HALT_COMPILER: {
        this.raiseError(
          "__HALT_COMPILER() can only be used from the outermost scope",
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
  /*
   * Reads statements
   */
  read_statement: function () {
    switch (this.token) {
      case "{":
        return this.read_code_block(false);

      case this.tok.T_IF:
        return this.read_if();

      case this.tok.T_SWITCH:
        return this.read_switch();

      case this.tok.T_FOR:
        return this.read_for();

      case this.tok.T_FOREACH:
        return this.read_foreach();

      case this.tok.T_WHILE:
        return this.read_while();

      case this.tok.T_DO:
        return this.read_do();

      case this.tok.T_COMMENT:
        return this.read_comment();

      case this.tok.T_DOC_COMMENT:
        return this.read_doc_comment();

      case this.tok.T_RETURN: {
        const result = this.node("return");
        this.next();
        const expr = this.read_optional_expr(";");
        this.expectEndOfStatement();
        return result(expr);
      }

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L429
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE: {
        const result = this.node(
          this.token === this.tok.T_CONTINUE ? "continue" : "break",
        );
        this.next();
        const level = this.read_optional_expr(";");
        this.expectEndOfStatement();
        return result(level);
      }

      case this.tok.T_GLOBAL: {
        const result = this.node("global");
        const items = this.next().read_list(this.read_simple_variable, ",");
        this.expectEndOfStatement();
        return result(items);
      }

      case this.tok.T_STATIC: {
        const current = [this.token, this.lexer.getState()];
        const result = this.node();
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          const expr = this.next().read_expr();
          this.expectEndOfStatement(expr);
          return result("expressionstatement", expr);
        }
        if (this.token === this.tok.T_FUNCTION) {
          return this.read_function(true, [0, 1, 0]);
        }
        const items = this.read_variable_declarations();
        this.expectEndOfStatement();
        return result("static", items);
      }

      case this.tok.T_ECHO: {
        const result = this.node("echo");
        const text = this.text();
        const shortForm = text === "<?=" || text === "<%=";
        const expressions = this.next().read_function_list(this.read_expr, ",");
        this.expectEndOfStatement();
        return result(expressions, shortForm);
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
        const result = this.node("inline");
        this.next();
        return result(value, fixFirstLine ? prevChar + value : value);
      }

      case this.tok.T_UNSET: {
        const result = this.node("unset");
        this.next().expect("(") && this.next();
        const variables = this.read_function_list(this.read_variable, ",");
        this.expect(")") && this.next();
        this.expect(";") && this.next();
        return result(variables);
      }

      case this.tok.T_DECLARE: {
        const result = this.node("declare");
        const body = [];
        let mode;
        this.next().expect("(") && this.next();
        const directives = this.read_declare_list();
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
          if (
            body.length === 0 &&
            this.extractDoc &&
            this._docs.length > this._docIndex
          ) {
            body.push(this.node("noop")());
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
          if (
            body.length === 0 &&
            this.extractDoc &&
            this._docs.length > this._docIndex
          ) {
            body.push(this.node("noop")());
          }
          this.expect("}") && this.next();
          mode = this.ast.declare.MODE_BLOCK;
        } else {
          this.expect(";") && this.next();
          mode = this.ast.declare.MODE_NONE;
        }
        return result(directives, body, mode);
      }

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW: {
        const result = this.node("throw");
        const expr = this.next().read_expr();
        this.expectEndOfStatement();
        return result(expr);
      }

      // ignore this (extra ponctuation)
      case ";": {
        this.next();
        return null;
      }

      case this.tok.T_STRING: {
        const result = this.node();
        const current = [this.token, this.lexer.getState()];
        const labelNameText = this.text();
        let labelName = this.node("identifier");
        // AST : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L457
        if (this.next().token === ":") {
          labelName = labelName(labelNameText);
          this.next();
          return result("label", labelName);
        } else {
          labelName.destroy();
        }

        // default fallback expr / T_STRING '::' (etc...)
        result.destroy();
        this.lexer.tokens.push(current);
        const statement = this.node("expressionstatement");
        const expr = this.next().read_expr();
        this.expectEndOfStatement(expr);
        return statement(expr);
      }

      case this.tok.T_GOTO: {
        const result = this.node("goto");
        let labelName = null;
        if (this.next().expect(this.tok.T_STRING)) {
          labelName = this.node("identifier");
          const name = this.text();
          this.next();
          labelName = labelName(name);
          this.expectEndOfStatement();
        }
        return result(labelName);
      }

      default: {
        // default fallback expr
        const statement = this.node("expressionstatement");
        const expr = this.read_expr();
        this.expectEndOfStatement(expr);
        return statement(expr);
      }
    }
  },
  /*
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  read_code_block: function (top) {
    const result = this.node("block");
    this.expect("{") && this.next();
    const body = top
      ? this.read_top_statements()
      : this.read_inner_statements();
    if (
      body.length === 0 &&
      this.extractDoc &&
      this._docs.length > this._docIndex
    ) {
      body.push(this.node("noop")());
    }
    this.expect("}") && this.next();
    return result(null, body);
  },
};
