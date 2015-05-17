/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    read_while: function() {
      this.expect('(').next();
      var cond = this.read_expr();
      this.expect(')').next();
      // @todo ':' inner_statement_list T_ENDWHILE ';'
      var body = this.read_statement();
      return ['while', cond, body];
    }
    ,read_do: function() {
      var body = this.read_statement();
      this.expect(tokens.T_WHILE).next().expect('(').next();
      var cond = this.read_expr();
      this.expect(')').next().expect(';').next();
      return ['do', cond, body];
    }
    ,read_for: function() {
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
      var body = this.read_statement();
      // @todo ':' inner_statement_list T_ENDFOR ';'
      return ['for', expr1, expr2, expr3, body];
    }
    /**
     * <ebnf>
     * foreach ::= '(' expr T_AS foreach_variable (T_DOUBLE_ARROW foreach_variable)? ')' statement
     * </ebnf>
     */
    ,read_foreach: function() {
      this.expect('(').next();
      var expr = this.read_expr();
      this.expect(tokens.T_AS).next();
      var item = this.read_foreach_variable(), 
        key = false;
      if (this.token === tokens.T_DOUBLE_ARROW) {
        key = item;
        item = this.next().read_foreach_variable();
      }
      this.expect(')').next();
      var body = this.read_statement();
      // @todo ':' inner_statement_list T_ENDFOREACH ';'
      return ['foreach', expr, key, item, body];
    }
    /**
     * <ebnf>
     * foreach_variable = ('&'? variable) | (T_LIST '(' assignment_list ')')
     * </ebnf>
     */
    ,read_foreach_variable: function() {
        if (this.token === '&') {
          return ['byref', this.next().read_variable()];
        } else if (this.token === tokens.T_LIST) {
          this.next().expect('(').next();
          var assignList = this.read_assignment_list();
          this.expect(')').next();
          return [
            'list', 
            assignList,
            false
          ];
        } else {
          return this.read_variable();
        }
    }
  };
};