/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
module.exports = {
  /**
   * Reads a while statement
   * ```ebnf
   * while ::= T_WHILE (statement | ':' inner_statement_list T_ENDWHILE ';')
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L587
   * @return {While}
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
  /**
   * Reads a do / while loop
   * ```ebnf
   * do ::= T_DO statement T_WHILE '(' expr ')' ';'
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L423
   * @return {Do}
   */
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
  /**
   * Read a for incremental loop
   * ```ebnf
   * for ::= T_FOR '(' for_exprs ';' for_exprs ';' for_exprs ')' for_statement
   * for_statement ::= statement | ':' inner_statement_list T_ENDFOR ';'
   * for_exprs ::= expr? (',' expr)*
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L425
   * @return {For}
   */
  ,read_for: function() {
    var result = this.node('for'),
      init = [],
      test = [],
      increment = [],
      body = null,
      shortForm = false;
    if (this.expect('(')) this.next();
    if (this.token !== ';') {
      init = this.read_list(this.read_expr, ',');
      if (this.expect(';')) this.next();
    } else {
      this.next();
    }
    if (this.token !== ';') {
      test = this.read_list(this.read_expr, ',');
      if (this.expect(';')) this.next();
    } else {
      this.next();
    }
    if (this.token !== ')') {
      increment = this.read_list(this.read_expr, ',');
      if (this.expect(')')) this.next();
    } else {
      this.next();
    }
    if (this.token === ':') {
      shortForm = true;
      body = this.read_short_form(this.tok.T_ENDFOR);
    } else  {
      body = this.read_statement();
    }
    return result(init, test, increment, body, shortForm);
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
