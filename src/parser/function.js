/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
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
   * checks if current token is a variadic keyword
   */
  ,is_variadic: function() {
    if (this.token === this.tok.T_ELLIPSIS) {
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
  ,read_function: function(closure, flag) {
    var result = this.node(
      this.read_function_declaration(closure ? 1 : flag ? 2 : 0)
    );
    if (flag && flag[2] == 1) {
      result = result(flag);
      this.expect(';').nextWithComments();
    } else {
      var body = this.expect('{').read_code_block(false);
      if (flag) {
        result = result(body, flag);
      } else {
        result = result(body);
      }
    }
    return result;
  }
  /**
   * reads a function declaration (without his body)
   * <ebnf>
   * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
   * </ebnf>
   */
  ,read_function_declaration: function(type) {
    var nodeName = 'function';
    if (type === 1) {
      nodeName = 'closure';
    } else if (type === 2) {
      nodeName = 'method';
    }
    var result = this.node(nodeName);
    this.expect(this.tok.T_FUNCTION);
    var isRef = this.next().is_reference();
    var name = false, use = [], returnType = false;
    if (type !== 1) {
      name = this.expect(this.tok.T_STRING).text();
      this.next();
    }
    this.expect('(').next();
    var params = this.read_parameter_list();
    this.expect(')').next();
    if (type === 1 && this.token === this.tok.T_USE) {
      use = this.next().expect('(').next().read_list(this.read_lexical_var, ',');
      this.expect(')').next();
    }
    if (this.token === ':') {
      returnType = this.next().read_type();
    }
    if (type === 1) {
      return result(params, isRef, use, returnType);
    }
    return result(name, params, isRef, returnType);
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
    if (this.token === this.tok.T_VARIABLE) {
      result[1] = this.text();
      this.next();
    } else {
      this.expect(['&', this.tok.T_VARIABLE]);
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
      while(this.token != this.EOF) {
        result.push(this.read_parameter());
        if (this.token == ',') {
          this.next();
        } else if (this.token == ')') {
          break;
        } else {
          this.error([',', ')']);
          break;
        }
      }
    }
    return result;
  }
  /**
   * <ebnf>
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * </ebnf>
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  ,read_parameter: function() {
    var type = this.read_type();
    var isRef = this.is_reference();
    var isVariadic = this.is_variadic();
    var name = this.expect(this.tok.T_VARIABLE).text();
    var value = [];
    if (this.next().token == '=') {
      value = this.next().read_expr();
    }
    return [name, type, value, isRef, isVariadic];
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
      while(this.token != this.EOF) {
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
    if (this.token === this.tok.T_ELLIPSIS ) {
      return this.node('variadic')(this.next().read_expr());
    }
    return this.read_expr();
  }
  /**
   * read type hinting
   * <ebnf>
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * </ebnf>
   */
  ,read_type: function() {
    switch(this.token) {
      case this.tok.T_ARRAY:
        this.next();
        return 'array';
      case this.tok.T_NS_SEPARATOR:
      case this.tok.T_STRING:
        return this.read_namespace_name();
      case this.tok.T_CALLABLE:
        this.next();
        return 'callable';
      default:
        return 'mixed';
    }
  }
};
