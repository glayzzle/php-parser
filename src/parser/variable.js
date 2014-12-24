/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/glayzzle-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *   variable ::= (reference_variable | namespace_name) (T_DOUBLE_COLON reference_variable)?
     * </ebnf>
     * <code>
     *  $var                      // simple var
     *  var::CONST_NAME           // dynamic class name with const retrieval
     *  $var->func()->property    // chained calls
     * </code>
     */
    read_variable: function(read_only) {
      var result;

      // reads the entry point
      if (this.is([tokens.T_VARIABLE, '$'])) {
        result = this.read_reference_variable();
      } else if (this.is([tokens.T_NS_SEPARATOR, tokens.T_STRING])) {
        result = this.read_namespace_name();
        if (this.token != tokens.T_DOUBLE_COLON) {
          // @see parser.js line 130 : resolves a conflict with scalar
          return ['const', result.length == 1 ? result[0] : result];
        }
      } else {
        this.expect('VARIABLE');
      }

      // static call
      if (this.token === tokens.T_DOUBLE_COLON) {
        var getter = null;
        if (this.is([tokens.T_VARIABLE, '$'])) {
          getter = this.read_reference_variable();
        } else if (this.token === tokens.T_STRING) {
          getter = this.text();
          this.next();
        } else {
          this.error([tokens.T_VARIABLE, tokens.T_STRING]);
        }
        if (this.token === '(') {
          var args = this.next().read_parameter_list();
          this.expect(')').next();
          result = ['static.call', result, getter, args ];
        } else {
          result = ['static.get', result, getter];
        }
      }

      // @todo
      // if (this.token === ) {
      // }

      return result;
    }
    /**
     * <ebnf>
     *  reference_variable ::=  (T_VARIABLE | '${' EXPR '}') ( '[' OFFSET ']' | '{' EXPR '}' )*
     * </ebnf>
     * <code>
     *  $foo[123];      // foo is an array ==> gets its entry
     *  $foo{1};        // foo is a string ==> get the 2nd char offset
     *  ${'foo'};       // get the dynamic var $foo
     *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
     * </code>
     */
    ,read_reference_variable: function() {
      var result = this.read_simple_variable();
      while(this.token != EOF) {
        if (this.token == '[') {
          result = ['offset', result, this.next().read_dim_offset()];
          this.expect(']').next();
        } else if (this.token == '{') {
          result = ['offset', result, this.next().read_expr()];
          this.expect('}').next();
        } else {
          break;
        }
      }
      return result;
    }
    /**
     * <ebnf>
     *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
     * </ebnf>
     */
    ,read_simple_variable: function() {
      var result;
      if (this.expect([tokens.T_VARIABLE, '$']).token === tokens.T_VARIABLE) {
        // plain variable name
        result = ['var', this.text()];
        this.next();
      } else {
        // dynamic variable name
        switch(this.next().token) {
          case '{':
            result = this.next().read_expr();
            this.expect('}').next();
            break;
          case '$': // @todo $$$var 
            result = ['lookup', this.read_simple_variable()];
            break;
          case tokens.T_VARIABLE: // $$var
            result = this.read_simple_variable();
            break;
          default:
            this.error(['{', '$', tokens.T_VARIABLE]);
        }
        result = ['lookup', result]; 
      }
      return result; 
    }
  };
};