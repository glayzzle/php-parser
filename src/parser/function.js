/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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
   * ```ebnf
   * function ::= function_declaration code_block
   * ```
   */
  ,read_function: function(closure, flag) {
    var result = this.read_function_declaration(
      closure ? 1 : (flag ? 2 : 0),
      flag && flag[1] === 1
    );
    if (flag && flag[2] == 1) {
      // abstract function :
      result.parseFlags(flag);
      if (this.expect(';')) {
        this.nextWithComments();
      }
    } else {
      if (this.expect('{')) {
        result.body = this.read_code_block(false);
        if (result.loc && result.body.loc) {
          result.loc.end = result.body.loc.end;
        }
      }
      if (!closure && flag) {
        result.parseFlags(flag);
      }
    }
    return result;
  }
  /**
   * reads a function declaration (without his body)
   * ```ebnf
   * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
   * ```
   */
  ,read_function_declaration: function(type, isStatic) {
    var nodeName = 'function';
    if (type === 1) {
      nodeName = 'closure';
    } else if (type === 2) {
      nodeName = 'method';
    }
    var result = this.node(nodeName);

    if (this.expect(this.tok.T_FUNCTION)) {
      this.next();
    }
    var isRef = this.is_reference();
    var name = false, use = [], returnType = null, nullable = false;
    if (type !== 1) {
      if ((type === 2 && this.is('IDENTIFIER')) || this.expect(this.tok.T_STRING)) {
        name = this.text();
        this.next();
      } else {
        this.next();
      }
    }
    if (this.expect('(')) this.next();
    var params = this.read_parameter_list();
    if (this.expect(')')) this.next();
    if (type === 1 && this.token === this.tok.T_USE) {
      if (this.next().expect('(')) this.next();
      use = this.read_list(this.read_lexical_var, ',');
      if (this.expect(')')) this.next();
    }
    if (this.token === ':') {
      if (this.next().token === '?') {
        nullable = true;
        this.next();
      }
      returnType = this.read_type();
    }
    if (type === 1) {
      // closure
      return result(params, isRef, use, returnType, nullable, isStatic);
    }
    return result(name, params, isRef, returnType, nullable);
  }
  /**
   * ```ebnf
   * lexical_var ::= '&'? T_VARIABLE
   * ```
   */
  ,read_lexical_var: function() {
    var result = this.node('variable');
    var isRef = false;
    if (this.token === '&') {
      isRef = true;
      this.next();
    }
    this.expect(this.tok.T_VARIABLE);
    var name = this.text().substring(1);
    this.next();
    return result(name, isRef, false);
  }
  /**
   * reads a list of parameters
   * ```ebnf
   *  parameter_list ::= (parameter ',')* parameter?
   * ```
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
   * ```ebnf
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * ```
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  ,read_parameter: function() {
    var node = this.node('parameter'),
      name = null,
      value = null,
      type = null,
      nullable = false;
    if (this.token === '?') {
      this.next();
      nullable = true;
    }
    type = this.read_type();
    if (nullable && !type) {
      this.raiseError('Expecting a type definition combined with nullable operator');
    }
    var isRef = this.is_reference();
    var isVariadic = this.is_variadic();
    if (this.expect(this.tok.T_VARIABLE)) {
      name = this.text().substring(1);
      this.next();
    }
    if (this.token == '=') {
      value = this.next().read_expr();
    }
    return node(name, type, value, isRef, isVariadic, nullable);
  }
  /**
   * Reads a list of arguments
   * ```ebnf
   *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
   * ```
   */
  ,read_function_argument_list: function() {
    var result = [];
    var wasVariadic = false;
    this.expect('(') && this.next();
    if (this.token !== ')') {
      while(this.token != this.EOF) {
        var argument = this.read_argument_list();
        if (argument) {
          result.push(argument);
          if (argument.kind === 'variadic') {
            wasVariadic = true;
          } else if (wasVariadic) {
            this.raiseError('Unexpected argument after a variadic argument');
          }
        }
        if (this.token === ',') {
          this.next();
        } else break;
      }
    }
    this.expect(')') && this.next();
    return result;
  }
  /**
   * ```ebnf
   *    argument_list ::= T_ELLIPSIS? expr
   * ```
   */
  ,read_argument_list: function() {
    if (this.token === this.tok.T_ELLIPSIS ) {
      return this.node('variadic')(this.next().read_expr());
    }
    return this.read_expr();
  }
  /**
   * read type hinting
   * ```ebnf
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * ```
   */
  ,read_type: function() {
    var result = this.node('identifier');
    switch(this.token) {
      case this.tok.T_ARRAY:
        this.next();
        return result(['', 'array'], false);
      case this.tok.T_NAMESPACE:
      case this.tok.T_NS_SEPARATOR:
      case this.tok.T_STRING:
        return this.read_namespace_name();
      case this.tok.T_CALLABLE:
        this.next();
        return result(['', 'callable'], false);
      default:
        return null;
    }
  }
};
