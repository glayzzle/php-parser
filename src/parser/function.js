/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  return {
    /**
     * checks if current token is a reference keyword
     */
    is_reference: function() {
      if (this.token == '&') {
        this.next();
        return true;
      }
      return false;
    }
    /**
     * reading a function
     * <ebnf>
     * function ::= function_declaration code_block
     * </ebnf>
     */
    ,read_function: function(annonymous) {
      var result = this.read_function_declaration(annonymous);
      result.push(this.expect('{').read_code_block(false));
      return result;
    }
    /**
     * reads a function declaration (without his body)
     * <ebnf>
     * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
     * </ebnf>
     */
    ,read_function_declaration: function(annonymous) {
      this.expect(tokens.T_FUNCTION);
      var isRef = this.next().is_reference();
      var name = false, use = [];
      if (!annonymous) {
        name = this.expect(tokens.T_STRING).text();
        this.next();
      }
      this.expect('(').next();
      var params = this.read_parameter_list();
      this.expect(')').next();
      if (this.token === tokens.T_USE) {
        use = this.next().expect('(').next().read_list(this.read_lexical_var, ',');
        this.expect(')').next();
      }
      return ['function', name, params, isRef, use];
    }
    /**
     * <ebnf>
     * lexical_var ::= '&'? T_VARIABLE
     * </ebnf>
     */
    ,read_lexical_var: function() {
      var result = [false, null];
      if (this.token === '&') {
        result[0] = true;
        this.next();
      }
      if (this.token === tokens.T_VARIABLE) {
        result[1] = this.text();
        this.next();
      } else {
        this.expect(['&', tokens.T_VARIABLE]);
      }
      return result;
    }
    /**
     * reads a list of parameters
     * <ebnf>
     *  parameter_list ::= (parameter ',')* parameter?
     * </ebnf>
     */
    ,read_parameter_list: function() {
      var result = [];
      if (this.token != ')') {
        while(this.token != EOF) {
          result.push(this.read_parameter());
          if (this.token == ',') {
            this.next();
          } else if (this.token == ')') {
            break;
          } else {
            this.error([',', ')']);
          }
        }
      }
      return result;
    }
    /**
     * <ebnf>
     *  parameter ::= type? '&'? T_VARIABLE ('=' scallar)?
     * </ebnf>
     */
    ,read_parameter: function() {
      var type = this.read_type();
      var isRef = this.is_reference();
      var name = this.expect(tokens.T_VARIABLE).text();
      var value = [];
      if (this.next().token == '=') {
        value = this.next().read_scalar();
      }
      return [name, type, value, isRef];
    }
    /**
     * <ebnf>
     *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
     * </ebnf>
     */
    ,read_function_argument_list: function() {
      var result = [];
      this.expect('(').next();
      if (this.token !== ')') {
        while(this.token != EOF) {
          result.push(this.read_argument_list());
          if (this.token === ',') {
            this.next();
          } else break;
        }
      }
      this.expect(')').next();
      return result;
    }
    /**
     * <ebnf>
     *    argument_list ::= T_ELLIPSIS? expr
     * </ebnf>
     */
    ,read_argument_list: function() {
      if (this.token === tokens.T_ELLIPSIS ) {
        return ['...', this.read_expr()];
      }
      return this.read_expr();
    }
    /**
     * read type hinting
     * <ebnf>
     *  type ::= T_ARRAY | namespace_name
     * </ebnf>
     */
    ,read_type: function() {
      switch(this.token) {
        case tokens.T_ARRAY:
          this.next();
          return 'array';
        case tokens.T_NS_SEPARATOR:
        case tokens.T_STRING:
          return this.read_namespace_name();
        default:
          return 'mixed';
      }
    }
  };
};