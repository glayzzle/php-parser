/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     * namespace ::= T_NAMESPACE namespace_name? '{' 
     *    top_statements 
     * '}' 
     * | T_NAMESPACE namespace_name ';' top_statements
     * </ebnf>
     */
    read_namespace: function() {
      this.expect(tokens.T_NAMESPACE).next();
      if (this.token == '{') {
        return [
            'namespace'
            , []
            , this.read_code_block(true)
        ];
      } else {
        // @fixme should expect {, T_STRING even if not NS_SEP
        if(this.token === tokens.T_NS_SEPARATOR)
            this.error(['{', tokens.T_STRING]);
        var name = this.read_namespace_name();
        if (this.token == ';') {
          var body = this.next().read_top_statements();
          this.expect(EOF);
          return ['namespace', name, body];
        } else if (this.token == '{') {
          return ['namespace', name, this.read_code_block(true)];
        } else {
          this.error(['{', ';']);
        }
      }
    }
    /**
     * reading a namespace name
     * <ebnf>
     *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
     * </ebnf>
     */
    ,read_namespace_name: function() {
      return this.read_list(tokens.T_STRING, tokens.T_NS_SEPARATOR);
    }
    /**
     * <ebnf>
     * use_statements ::=
     *      use_statements ',' use_statement
     *      | use_statement
     * </ebnf>
     */
    ,read_use_statements: function() {
        var result = [];
        while(this.token !== EOF) {
            this.expect(tokens.T_USE).next();
            result.push(this.read_list(this.read_use_statement, ','));
            if(this.token !== tokens.T_USE) break;
        }
        return result;
    }
    /**
     * <ebnf>
     * use_statement ::= (
     *  (T_FUNCTION | T_CONST)? namespace_name
     *  | (T_FUNCTION | T_CONST)? namespace_name T_AS T_STRING
     *  ) ';'
     * </ebnf>
     */
    ,read_use_statement: function() {
        var result = null;
        if(
          this.token === tokens.T_FUNCTION
          || this.token === tokens.T_CONST
        ) {
          // @todo should preserve this information ?
          this.next();
        }
        var name = this.read_namespace_name();
        if(this.token === tokens.T_AS) {
          this.next().expect(tokens.T_STRING);
          result = ['use', name, this.text()];
          this.next();
        } else {
          result = ['use', name, name[name.length - 1]];
        }
        return result;
    }
  };
};