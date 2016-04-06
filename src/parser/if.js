/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  if ::= '(' expr ')' ':' ...
     * </ebnf>
     */
    read_if: function() {
      var result = this.node('if');
      var cond = this.read_if_expr();
      var body = null;
      var elseCond = false;
      
      if (this.token === ':') {
        this.next();
        body = [];
        while(this.token != EOF && this.token !== tokens.T_ENDIF) {
          if (this.token === tokens.T_ELSEIF) {
            elseCond = this.next().read_elseif_short();
            break;
          } else if (this.token === tokens.T_ELSE) {
            elseCond = this.next().read_else_short();
            break;
          }
          body.push(this.read_inner_statement());
        }
        this.expect(tokens.T_ENDIF).next().expectEndOfStatement();
      } else {
        body = this.read_statement();
        if (this.token === tokens.T_ELSEIF) {
          elseCond = this.next().read_if();
        } else if (this.token === tokens.T_ELSE) {
          elseCond = this.next().read_statement();
        }
      }
      return result(cond, body, elseCond);
    },
    /**
     * reads an if expression : '(' expr ')'
     */
    read_if_expr: function() {
      this.expect('(').next();
      var result = this.read_expr();
      this.expect(')').next();
      return result;
    },
    /**
     * reads an elseif (expr): statements
     */
    read_elseif_short: function() {

      var cond = this.read_if_expr();
      this.expect(':').next();
      var body = [];
      var elseCond = false;

      while(this.token != EOF && this.token !== tokens.T_ENDIF) {
        if (this.token === tokens.T_ELSEIF) {
          elseCond = this.next().read_elseif_short();
          break;
        } else if (this.token === tokens.T_ELSE) {
          elseCond = this.next().read_else_short();
          break;
        }
        body.push(this.read_inner_statement());
      }

      return ['if', cond, body, elseCond];
    },
    /**
     * 
     */
    read_else_short: function() {
      this.expect(':').next();
      var body = [];
      while(this.token != EOF && this.token !== tokens.T_ENDIF) {
        body.push(this.read_inner_statement());
      }
      return body;
    }
  };
};