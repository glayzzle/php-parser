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
        // @todo
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