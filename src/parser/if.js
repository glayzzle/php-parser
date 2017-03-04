/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * Reads an IF statement
   *
   * ```ebnf
   *  if ::= T_IF '(' expr ')' ':' ...
   * ```
   */
  read_if: function() {
    var result = this.node('if'),
      body = null,
      alternate = null,
      shortForm = false,
      test = null;
    test = this.read_if_expr();

    if (this.token === ':') {
      shortForm = true;
      this.next();
      body = this.node('block');
      var items = [];
      while(this.token !== this.EOF && this.token !== this.tok.T_ENDIF) {
        if (this.token === this.tok.T_ELSEIF) {
          alternate = this.next().read_elseif_short();
          break;
        } else if (this.token === this.tok.T_ELSE) {
          alternate = this.next().read_else_short();
          break;
        }
        items.push(this.read_inner_statement());
      }
      body = body(null, items);
      this.expect(this.tok.T_ENDIF) && this.next();
      this.expectEndOfStatement();
    } else {
      body = this.read_statement();
      /**
       * ignore : if (..) { } /* *./ else { }
       */
      this.ignoreComments();
      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.next().read_if();
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.next().read_statement();
      }
    }
    return result(test, body, alternate, shortForm);
  },
  /**
   * reads an if expression : '(' expr ')'
   */
  read_if_expr: function() {
    this.expect('(') && this.next();
    var result = this.read_expr();
    this.expect(')') && this.next();
    return result;
  },
  /**
   * reads an elseif (expr): statements
   */
  read_elseif_short: function() {
    var result = this.node('if'),
      alternate = null,
      test = null,
      body = null,
      items = [];
    test = this.read_if_expr();
    if (this.expect(':')) this.next();
    body = this.node('block');
    while(this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      if (this.token === this.tok.T_ELSEIF) {
        alternate = this.next().read_elseif_short();
        break;
      } else if (this.token === this.tok.T_ELSE) {
        alternate = this.next().read_else_short();
        break;
      }
      items.push(this.read_inner_statement());
    }
    body = body(null, items);
    return result(test, body, alternate, true);
  },
  /**
   *
   */
  read_else_short: function() {
    if (this.expect(':')) this.next();
    var body = this.node('block'), items = [];
    while(this.token != this.EOF && this.token !== this.tok.T_ENDIF) {
      items.push(this.read_inner_statement());
    }
    return body(null, items);
  }
};
