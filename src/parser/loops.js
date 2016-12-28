/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
module.exports = {
  /**
   * Reads a while statement
   */
  read_while: function() {
    var result = this.node('while'),
      test = null,
      body = null,
      shortForm = false
    ;
    if (this.expect('(')) this.next();
    test = this.read_expr();
    if (this.expect(')')) this.next();
    if (this.token === ':') {
      shortForm = true;
      body = this.read_short_form(this.tok.T_ENDWHILE);
    } else {
      body = this.read_statement();
    }
    return result(test, body, shortForm);
  }
  ,read_do: function() {
    var result = this.node('do'),
      test = null,
      body = null
    ;
    body = this.read_statement();
    if (this.expect(this.tok.T_WHILE)) {
      if (this.next().expect('(')) this.next();
      test  = this.read_expr();
      if (this.expect(')')) this.next();
      if (this.expect(';')) this.next();
    }
    return result(test, body);
  }
  ,read_for: function() {
    var result = this.node('for');
    if (this.expect('(')) this.next();
    var expr1 = null, expr2 = null, expr3 = null;
    if (this.token !== ';') {
      expr1 = this.read_list(this.read_expr, ',');
      if (this.expect(';')) this.next();
    } else {
      this.next();
    }
    if (this.token !== ';') {
      expr2 = this.read_list(this.read_expr, ',');
      if (this.expect(';')) this.next();
    } else {
      this.next();
    }
    if (this.token !== ')') {
      expr3 = this.read_list(this.read_expr, ',');
      if (this.expect(')')) this.next();
    } else {
      this.next();
    }
    var body = null;
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDFOR);
    } else  {
      body = this.read_statement();
    }
    return result(expr1, expr2, expr3, body);
  }
  /**
   * ```ebnf
   * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
   * ```
   */
  ,read_foreach: function() {
    var result = this.node('foreach'), item = null, key = null;
    if (this.expect('(')) this.next();
    var expr = this.read_expr();
    if (this.expect(this.tok.T_AS)) {
      this.next();
      item = this.read_foreach_variable();
      if (this.token === this.tok.T_DOUBLE_ARROW) {
        key = item;
        item = this.next().read_foreach_variable();
      }
    }

    if (this.expect(')')) this.next();
    var body = [];
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDFOREACH);
    } else {
      body = this.read_statement();
    }
    return result(expr, key, item, body);
  }
  /**
   * ```ebnf
   * foreach_variable = ('&'? variable) | (T_LIST '(' assignment_list ')')
   * ```
   */
  ,read_foreach_variable: function() {
      if (this.token === '&') {
        return this.next().read_variable(false, false, true);
      } else if (this.token === this.tok.T_LIST) {
        var result = this.node('list');
        if (this.next().expect('(')) this.next();
        var assignList = this.read_assignment_list();
        if (this.expect(')')) this.next();
        return result(assignList, false);
      } else {
        return this.read_variable(false, false, false);
      }
  }
};
