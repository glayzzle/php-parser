/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  if ::=
     * </ebnf>
     */
    read_if: function() {
      this.expect('(').next();
      var cond = this.read_expr();
      var body = null;
      var elseCond = false;
      this.expect(')').next();
      if (this.token === ':') {
        this.next();
        body = [];
        while(this.token != EOF && this.token !== tokens.T_ENDIF) {
          body.push(this.read_inner_statement());
        }
        this.expect(tokens.T_ENDIF).next().expectEndOfStatement();
      } else {
        body = this.read_statement();
      }
      // handling else
      if (this.token === tokens.T_ELSEIF) {
        elseCond = this.next().read_if();
      } else if (this.token === tokens.T_ELSE) {
        elseCond = this.next().read_statement();
      }
      return ['if', cond, body, elseCond];
    }
  };
};