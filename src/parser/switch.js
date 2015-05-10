/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * Reads a switch statement
     * <ebnf>
     *  switch ::= T_SWITCH '(' expr ')' switch_case_list
     * </ebnf>
     */
    read_switch: function() {
      this.expect(tokens.T_SWITCH).next().expect('(').next();
      var expr = this.read_expr();
      this.expect(')').next();
      var cases = this.read_switch_case_list();
      return ['switch', expr, cases];
    }
    /**
     * <ebnf>
     *  switch_case_list ::= '{' ';'? case_list* '}' | ':' ';'? case_list* T_ENDSWITCH ';'  
     * </ebnf>
     */
    ,read_switch_case_list: function() {
      // DETECT SWITCH MODE
      var expect = null, result = [];
      if (this.token === '{') {
        expect = '}';
      } else if (this.token === ':') {
        expect = tokens.T_ENDSWITCH;
      } else {
        this.expect(['{', ':']);
      }
      // OPTIONNAL ';'
      this.next();
      if (this.token === ';') {
        // why ? it's compliant with spec but why ... wtf ?
        this.next();
      }
      // EXTRACTING CASES
      while(this.token !== EOF && this.token !== expect) {
        result.push( this.read_case_list(expect) );
      }
      // CHECK END TOKEN
      this.expect(expect).next();
      if (expect === tokens.T_ENDSWITCH) {
        this.expect(';').next();
      }
      return result;
    }
    /**
     * <ebnf>
     *   case_list ::= ((T_CASE expr) | T_DEFAULT) (':' | ';') inner_statement*
     * </ebnf>
     */
    ,read_case_list: function(stopToken) {
      var result = {
        condition: false,
        body: []
      };
      if (this.token === tokens.T_CASE) {
        result.condition = this.next().read_expr();
      } else if (this.token === tokens.T_DEFAULT) {
        // the defaut entry - no condition
        this.next();
      } else {
        this.expect([tokens.T_CASE, tokens.T_DEFAULT]);
      }
      this.expect([':', ';']).next();
      while(
        this.token != EOF 
        && this.token !== stopToken
        && this.token !== tokens.T_CASE
        && this.token !== tokens.T_DEFAULT
      ) {
        result.body.push(this.read_inner_statement());
      }
      return result;
    }
  };
};