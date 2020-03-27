/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /**
   * Reads an IF statement
   *
   * ```ebnf
   *  if ::= T_IF '(' expr ')' ':' ...
   * ```
   */
  read_if: function () {
    const result = this.node("if");
    const test = this.next().read_if_expr();
    let body = null;
    let alternate = null;
    let shortForm = false;

    if (this.token === ":") {
      shortForm = true;
      this.next();
      body = this.node("block");
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
  /**
   * reads an if expression : '(' expr ')'
   */
  read_if_expr: function () {
    this.expect("(") && this.next();
    const result = this.read_expr();
    this.expect(")") && this.next();
    return result;
  },
  /**
   * reads an elseif (expr): statements
   */
  read_elseif_short: function () {
    let alternate = null;
    const result = this.node("if");
    const test = this.next().read_if_expr();
    if (this.expect(":")) this.next();
    const body = this.node("block");
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
    return result(test, body(null, items), alternate, true);
  },
  /**
   *
   */
  read_else_short: function () {
    if (this.next().expect(":")) this.next();
    const body = this.node("block");
    const items = [];
    while (this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      items.push(this.read_inner_statement());
    }
    return body(null, items);
  },
};
