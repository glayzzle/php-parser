/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
   * reading an enum
   * ```ebnf
   * enum ::= enum_scope? T_ENUM T_STRING (':' NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' ENUM_BODY '}'
   * ```
   */
  read_enum_declaration_statement: function () {
    const result = this.node("enum");
    // graceful mode : ignore token & go next
    if (this.token !== this.tok.T_ENUM) {
      this.error(this.tok.T_ENUM);
      this.next();
      return null;
    }
    this.next().expect(this.tok.T_STRING);
    let propName = this.node("identifier");
    const name = this.text();
    this.next();
    propName = propName(name);
    const valueType = this.read_enum_value_type();
    const propImplements = this.read_implements_list();
    this.expect("{");
    const body = this.next().read_enum_body();
    return result(propName, valueType, propImplements, body);
  },

  read_enum_value_type: function () {
    if (this.token === ":") {
      return this.next().read_namespace_name();
    }

    return null;
  },

  /*
   * Reads an enum body
   * ```ebnf
   *   enum_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
   * ```
   */
  read_enum_body: function () {
    let result = [];

    while (this.token !== this.EOF && this.token !== "}") {
      if (this.token === this.tok.T_COMMENT) {
        result.push(this.read_comment());
        continue;
      }

      if (this.token === this.tok.T_DOC_COMMENT) {
        result.push(this.read_doc_comment());
        continue;
      }

      // check T_USE trait
      if (this.token === this.tok.T_USE) {
        result = result.concat(this.read_trait_use_statement());
        continue;
      }

      // check enum cases
      if (this.token === this.tok.T_CASE) {
        const enumcase = this.read_enum_case();
        if (this.expect(";")) {
          this.next();
        }
        result = result.concat(enumcase);
        continue;
      }

      // read member flags
      const flags = this.read_member_flags(false);

      // check constant
      if (this.token === this.tok.T_CONST) {
        const constants = this.read_constant_list(flags);
        if (this.expect(";")) {
          this.next();
        }
        result = result.concat(constants);
        continue;
      }

      // jump over T_VAR then land on T_VARIABLE
      if (this.token === this.tok.T_VAR) {
        this.next().expect(this.tok.T_VARIABLE);
        flags[0] = null; // public (as null)
        flags[1] = 0; // non static var
      }

      if (this.token === this.tok.T_FUNCTION) {
        // reads a function
        result.push(this.read_function(false, flags));
      } else {
        // raise an error
        this.error([this.tok.T_CASE, this.tok.T_CONST, this.tok.T_FUNCTION]);
        // ignore token
        this.next();
      }
    }
    this.expect("}");
    this.next();
    return result;
  },
  read_enum_case: function () {
    this.expect(this.tok.T_CASE);
    const result = this.node("enumcase");
    let caseName = this.node("identifier");
    const name = this.next().text();
    this.next();
    caseName = caseName(name);

    const value = this.token === "=" ? this.next().read_expr() : null;
    this.expect(";");

    return result(caseName, value);
  },
};
