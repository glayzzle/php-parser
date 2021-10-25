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
  read_enum_declaration_statement: function (attrs) {
    const result = this.node("enum");
    // graceful mode : ignore token & go next
    if (!this.expect(this.tok.T_ENUM)) {
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
    const body = this.next().read_class_body(false, true);
    const node = result(propName, valueType, propImplements, body);
    if (attrs) node.attrGroups = attrs;
    return node;
  },

  read_enum_value_type: function () {
    if (this.token === ":") {
      return this.next().read_namespace_name();
    }

    return null;
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
