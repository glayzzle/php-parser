/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * Reads a short form of tokens
   */
  read_short_form: function(token) {
    var body = [];
    this.expect(':').next();
    while(this.token != this.EOF && this.token !== token) {
      body.push(this.read_inner_statement());
    }
    this.expect(token).next().expectEndOfStatement();
    return body;
  }
  /**
   * Reads a while statement
   */
  ,read_while: function() {
    var result = this.node('while');
    this.expect('(').next();
    var cond = this.read_expr();
    this.expect(')').next();
    var body = [];
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDWHILE);
    } else {
      body = this.read_statement();
    }
    return result(cond, body);
  }
  ,read_do: function() {
    var result = this.node('do');
    var body = this.read_statement();
    this.expect(this.tok.T_WHILE).next().expect('(').next();
    var cond = this.read_expr();
    this.expect(')').next().expect(';').next();
    return result(cond, body);
  }
  ,read_for: function() {
    var result = this.node('for');
    this.expect('(').next();
    var expr1 = null, expr2 = null, expr3 = null;
    if (this.token !== ';') {
      expr1 = this.read_list(this.read_expr, ',');
      this.expect(';').next();
    } else {
      this.next();
    }
    if (this.token !== ';') {
      expr2 = this.read_list(this.read_expr, ',');
      this.expect(';').next();
    } else {
      this.next();
    }
    if (this.token !== ')') {
      expr3 = this.read_list(this.read_expr, ',');
      this.expect(')').next();
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
   * <ebnf>
   * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
   * </ebnf>
   */
  ,read_foreach: function() {
    var result = this.node('foreach');
    this.expect('(').next();
    var expr = this.read_expr();
    this.expect(this.tok.T_AS).next();
    var item = this.read_foreach_variable(),
      key = false;
    if (this.token === this.tok.T_DOUBLE_ARROW) {
      key = item;
      item = this.next().read_foreach_variable();
    }
    this.expect(')').next();
    var body = [];
    if (this.token === ':') {
      body = this.read_short_form(this.tok.T_ENDFOREACH);
    } else {
      body = this.read_statement();
    }
    return result(expr, key, item, body);
  }
  /**
   * <ebnf>
   * foreach_variable = ('&'? variable) | (T_LIST '(' assignment_list ')')
   * </ebnf>
   */
  ,read_foreach_variable: function() {
      if (this.token === '&') {
        return ['byref', this.next().read_variable()];
      } else if (this.token === this.tok.T_LIST) {
        var result = this.node('list');
        this.next().expect('(').next();
        var assignList = this.read_assignment_list();
        this.expect(')').next();
        return result(assignList, false);
      } else {
        return this.read_variable();
      }
  }
};
