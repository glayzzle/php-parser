module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     * start ::= (namespace | top_statement)*
     * </ebnf>
     */
    read_start: function() {
      if (this.token == tokens.T_NAMESPACE) {
        return this.read_namespace();
      } else {
        return this.read_top_statement();
      }
    }
    /**
     * reading a list of top statements (helper for top_statement*)
     * <ebnf>
     *  top_statements ::= top_statement*
     * </ebnf>
     */
    ,read_top_statements: function() {
      var result = [];
      while(this.token !== EOF && this.token !== '}') {
        result.push(this.read_top_statement());
      }
      return result;
    }
    /**
     * reading a top statement
     * <ebnf>
     *  top_statement ::= function | class | interface | trait | inner_statement
     * </ebnf>
     */
    ,read_top_statement: function() {
      if (this.token == tokens.T_FUNCTION ) {
        return this.read_function();
      } else if (this.token == tokens.T_FINAL || this.token == tokens.T_ABSTRACT) {
        var flag = this.read_class_scope();
        if ( this.token == tokens.T_CLASS) {
          return this.read_class(flag);
        } else if ( this.token == tokens.T_INTERFACE ) {
          return this.read_interface(flag);
        } else if ( this.token == tokens.T_TRAIT ) {
          return this.read_trait(flag);
        } else {
          this.error([tokens.T_CLASS, tokens.T_INTERFACE, tokens.T_TRAIT]);
        }
      } else if ( this.token == tokens.T_CLASS) {
        return this.read_class(0);
      } else if ( this.token == tokens.T_INTERFACE ) {
        return this.read_interface(0);
      } else if ( this.token == tokens.T_TRAIT ) {
        return this.read_trait(0);
      } else if( this.token == tokens.T_USE ) {
        return this.read_use_statements();
      } else {
        return this.read_inner_statement();
      }
    }
    /**
     * reads a list of simple inner statements (helper for inner_statement*)
     * <ebnf>
     *  inner_statements ::= inner_statement*
     * </ebnf>
     */
    ,read_inner_statements: function() {
      var result = [];
      while(this.token != EOF && this.token !== '}') {
        result.push(this.read_inner_statement());
      }
      return result;
    }
    /**
     * reads a simple inner statement
     * <ebnf>
     *  inner_statement ::= '{' inner_statements '}' | token
     * </ebnf>
     */
    ,read_inner_statement: function() {
      switch(this.token) {
        case '{':
          return this.read_code_block(false);
        case tokens.T_IF:
          return this.read_if();
        default:
          return this.read_token();
      }
    }
    /**
     * <ebnf>
     *  if ::=
     * </ebnf>
     */
    ,read_if: function() {
    }
    /**
     * <ebnf>
     *  code_block ::= '{' (inner_statements | top_statements) '}'
     * </ebnf>
     */
    ,read_code_block: function(top) {
      this.expect('{').next();
      var body = top ?
        this.read_top_statements()
        : this.read_inner_statements()
      ;
      this.expect('}').next();
      return body;
    }
  };
};