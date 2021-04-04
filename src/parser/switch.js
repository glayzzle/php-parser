/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
   * Reads a switch statement
   * ```ebnf
   *  switch ::= T_SWITCH '(' expr ')' switch_case_list
   * ```
   * @return {Switch}
   * @see http://php.net/manual/en/control-structures.switch.php
   */
  read_switch: function () {
    const result = this.node("switch");
    this.expect(this.tok.T_SWITCH) && this.next();
    this.expect("(") && this.next();
    const test = this.read_expr();
    this.expect(")") && this.next();
    const shortForm = this.token === ":";
    const body = this.read_switch_case_list();
    return result(test, body, shortForm);
  },
  /*
   * ```ebnf
   *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L566
   */
  read_switch_case_list: function () {
    // DETECT SWITCH MODE
    let expect = null;
    const result = this.node("block");
    const items = [];
    if (this.token === "{") {
      expect = "}";
    } else if (this.token === ":") {
      expect = this.tok.T_ENDSWITCH;
    } else {
      this.expect(["{", ":"]);
    }
    this.next();
    // OPTIONNAL ';'
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L570
    if (this.token === ";") {
      this.next();
    }
    // EXTRACTING CASES
    while (this.token !== this.EOF && this.token !== expect) {
      items.push(this.read_case_list(expect));
    }
    if (
      items.length === 0 &&
      this.extractDoc &&
      this._docs.length > this._docIndex
    ) {
      items.push(this.node("noop")());
    }
    // CHECK END TOKEN
    this.expect(expect) && this.next();
    if (expect === this.tok.T_ENDSWITCH) {
      this.expectEndOfStatement();
    }
    return result(null, items);
  },
  /*
   * ```ebnf
   *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
   * ```
   */
  read_case_list: function (stopToken) {
    const result = this.node("case");
    let test = null;
    if (this.token === this.tok.T_CASE) {
      test = this.next().read_expr();
    } else if (this.token === this.tok.T_DEFAULT) {
      // the default entry - no condition
      this.next();
    } else {
      this.expect([this.tok.T_CASE, this.tok.T_DEFAULT]);
    }
    // case_separator
    this.expect([":", ";"]) && this.next();
    const body = this.node("block");
    const items = [];
    while (
      this.token !== this.EOF &&
      this.token !== stopToken &&
      this.token !== this.tok.T_CASE &&
      this.token !== this.tok.T_DEFAULT
    ) {
      items.push(this.read_inner_statement());
    }
    return result(test, body(null, items));
  },
};
