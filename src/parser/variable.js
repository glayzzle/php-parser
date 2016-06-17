/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *   variable ::= ...complex @todo
     * </ebnf>
     * <code>
     *  $var                      // simple var
     *  classname::CONST_NAME     // dynamic class name with const retrieval
     *  foo()                     // function call
     *  $var->func()->property    // chained calls
     * </code>
     */
    read_variable: function(read_only, encapsed) {
      var result;

      // reads the entry point
      if (this.is([tokens.T_VARIABLE, '$'])) {
        result = this.read_reference_variable(encapsed);
      } else if (this.is([tokens.T_NS_SEPARATOR, tokens.T_STRING])) {
        result = this.read_namespace_name();
        if (
          this.token != tokens.T_DOUBLE_COLON
          && this.token != '('
        ) {
          // @see parser.js line 130 : resolves a conflict with scalar
          return ['const', result.length == 1 ? result[0] : result];
        } else {
          result = ['ns', result];
        }
      } else if (this.token === tokens.T_STATIC) {
        this.next();
        result = ['ns', ['static']];
      } else {
        this.expect('VARIABLE');
      }

      // static mode
      if (this.token === tokens.T_DOUBLE_COLON) {
        var getter = null;
        if (this.next().is([tokens.T_VARIABLE, '$'])) {   
          getter = this.read_reference_variable(encapsed);
        } else if (
          this.token === tokens.T_STRING
          || this.token === tokens.T_CLASS
        ) {
          getter = this.text();
          this.next();
        } else {
          this.error([tokens.T_VARIABLE, tokens.T_STRING]);
        }
        if (result[0] != 'ns') {
          result = ['lookup', 'class', result];
        }
        result = ['static', 'get', result, getter];
      }

      return this.recursive_variable_chain_scan(result, read_only, encapsed);
    }

    ,recursive_variable_chain_scan: function(result, read_only, encapsed) {
      recursive_scan_loop:
      while(this.token != EOF) {
        switch(this.token) {
          case '(':
            if (read_only) {
              return result;
            } else {
              result = ['call', result,  this.read_function_argument_list()];
            }
            break;
          case '[':
            this.next();
            var offset = false;
            if (encapsed) {
              offset = this.read_encaps_var_offset();
              this.expect(']').next();
            } else {
              // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
              if (this.token !== ']') {
                offset = this.read_expr();
                this.expect(']').next();
              } else {
                this.next();
              }
            }
            result = ['offset', result, offset];
            break;
          case tokens.T_OBJECT_OPERATOR:
            var what;
            switch(this.next().token) {
              case tokens.T_STRING:
                what = ['string', this.text()];
                this.next();
                break;
              case tokens.T_VARIABLE:
                what = ['var', this.text()];
                this.next();
                break;
              case '{':
                what = this.next().read_expr();
                this.expect('}').next();
                break;
              default:
                this.error([tokens.T_STRING, tokens.T_VARIABLE]);
            }
            result = ['prop', result, what];
            break;
          default:
            break recursive_scan_loop;
        }
      }
      return result;      
    }
    /**
     * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231  
     */
    ,read_encaps_var_offset: function() {
      var offset = false;
      if (this.token === tokens.T_STRING) {
        offset = ['string', this.text()];
      } else if (this.token === tokens.T_NUM_STRING) {
        offset = ['number', this.text()];
      } else if (this.token === tokens.T_VARIABLE) {
        offset = ['var', this.text()];
      } else {
        this.expect([
          tokens.T_STRING,
          tokens.T_NUM_STRING,
          tokens.T_VARIABLE
        ]);
      }
      this.next();
      return offset;
    }
    /**
     * <ebnf>
     *  reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
     * </ebnf>
     * <code>
     *  $foo[123];      // foo is an array ==> gets its entry
     *  $foo{1};        // foo is a string ==> get the 2nd char offset
     *  ${'foo'}[123];  // get the dynamic var $foo
     *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
     * </code>
     */
    ,read_reference_variable: function(encapsed) {
      var result = this.read_simple_variable();
      while(this.token != EOF) {
        if (this.token == '[') {
          if (encapsed) {
            result = this.next().read_encaps_var_offset();
          } else {
            result = ['offset', result, this.next().read_dim_offset()];
          }
          this.expect(']').next();
        } else if (this.token == '{' && !encapsed) {
          result = ['offset', result, this.next().read_expr()];
          this.expect('}').next();
          break;
        } else break;
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
          case '$': // $$$var 
            result = ['lookup', 'var', this.read_simple_variable()];
            break;
          case tokens.T_VARIABLE: // $$var
            result = ['var', this.text()];
            this.next();
            break;
          default:
            this.error(['{', '$', tokens.T_VARIABLE]);
        }
        result = ['lookup', 'var', result]; 
      }
      return result; 
    }
  };
};