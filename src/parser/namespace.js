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
            this.read_list(this.read_use_statement_mixed, ',').forEach(function(item) {
              if (item[0] === 'use') {
                result.push(item);
              } else {
                item.forEach(function(child) {
                  result.push(child);
                });
              }
            });
            if(this.token !== tokens.T_USE) break;
        }
        return result;
    }
    /**
     * <ebnf>
     *  inline_use_declaration ::= ...
     * </ebnf>
     * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L375
     */
    ,read_inline_use_declaration: function(prefix) {
      var result = [];
      while(this.token !== EOF) {
        var ns = this.read_use_statement(prefix[3] !== false);
        if(this.token === tokens.T_AS) {
          this.next().expect(tokens.T_STRING);
          ns[2] = this.text();
          this.next();
        }
        Array.prototype.unshift.apply(ns[1], prefix[1]);
        if (prefix[3] !== false) {
          ns[3] = prefix[3];
        }
        result.push(ns);
        if(this.token !== ',') {
          break;
        } else {
          this.next();
        }
      }
      return result;
    }
    /**
     * <ebnf>
     *   use_statement_mixed ::= 
     *       use_statement  (T_AS T_STRING | '{' read_inline_use_declaration '}' ) 
     *       (',' read_use_statement)*
     * </ebnf>
     */
    ,read_use_statement_mixed: function() {
      var use = this.read_use_statement();
      if(this.token === tokens.T_AS) {
        this.next().expect(tokens.T_STRING);
        use[2] = this.text();
        this.next();
      } else if (this.token === '{') {
        use = this.next().read_inline_use_declaration(use);
        this.expect('}').next();
      }
      return use;
    }
    /**
     * <ebnf>
     * use_statement ::= (
     *  (T_FUNCTION | T_CONST)? namespace_name
     *  )
     * </ebnf>
     */
    ,read_use_statement: function(ignoreType) {
        var result = null;
        var type = false;
        if(
          !ignoreType && (this.token === tokens.T_FUNCTION || this.token === tokens.T_CONST)
        ) {
          type = this.token === tokens.T_FUNCTION ? 'function' : 'const';
          this.next();
        }
        var name = this.read_namespace_name();
        return ['use', name, name[name.length - 1], type];
    }
  };
};