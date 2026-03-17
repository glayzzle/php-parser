/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
   * Reads an IF statement
   *
   * ```ebnf
   *  if ::= T_IF '(' expr ')' ':' ...
   * ```
   */
  read_if() {
    const result = this.node("if");
    const test = this.next().read_if_expr();
    let body;
    let alternate = null;
    let shortForm = false;

    if (this.token === ":") {
      shortForm = true;
      body = this.node("block");
      this.next();
      const items = [];
      while (this.token !== this.EOF && this.token !== this.tok.T_ENDIF) {
        if (this.token === this.tok.T_ELSEIF) {
          alternate = this.read_elseif_short();
          break;
        } else if (this.token === this.tok.T_ELSE) {
          alternate = this.read_else_short();
          break;
        }
        items.push(this.read_inner_statement());
      }
      if (
        items.length === 0 &&
        this.extractDoc &&
        this._docs.length > this._docIndex
      ) {
        items.push(this.node("noop")());
      }
      body = body(null, items);
      this.expect(this.tok.T_ENDIF) && this.next();
      this.expectEndOfStatement();
    } else {
      body = this.read_statement();
      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.read_if();
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.next().read_statement();
      }
    }
    return result(test, body, alternate, shortForm);
  },
  /*
   * reads an if expression : '(' expr ')'
   */
  read_if_expr() {
    this.expect("(") && this.next();
    const result = this.read_expr();
    this.expect(")") && this.next();
    return result;
  },
  /*
   * reads an elseif (expr): statements
   */
  read_elseif_short() {
    let alternate = null;
    const result = this.node("if");
    const test = this.next().read_if_expr();
    const body = this.node("block");
    if (this.expect(":")) this.next();
    const items = [];
    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.read_elseif_short();
        break;
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.read_else_short();
        break;
      }
      items.push(this.read_inner_statement());
    }
    if (
      items.length === 0 &&
      this.extractDoc &&
      this._docs.length > this._docIndex
    ) {
      items.push(this.node("noop")());
    }
    return result(test, body(null, items), alternate, true);
  },
  /*
   *
   */
  read_else_short() {
    this.next();
    const body = this.node("block");
    if (this.expect(":")) this.next();
    const items = [];
    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      items.push(this.read_inner_statement());
    }
    if (
      items.length === 0 &&
      this.extractDoc &&
      this._docs.length > this._docIndex
    ) {
      items.push(this.node("noop")());
    }
    return body(null, items);
  },
};
