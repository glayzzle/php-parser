/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {

  read_expr: function() {
    var expr = this.read_expr_item();
    switch(this.token) {
      // binary operations
      case '|': return this.node('bin')('|', expr, this.next().read_expr());
      case '&': return this.node('bin')('&', expr, this.next().read_expr());
      case '^': return ['bin', '^', expr, this.next().read_expr()];
      case '.': return ['bin', '.', expr, this.next().read_expr()];
      case '+': return ['bin', '+', expr, this.next().read_expr()];
      case '-': return ['bin', '-', expr, this.next().read_expr()];
      case '*': return ['bin', '*', expr, this.next().read_expr()];
      case '/': return ['bin', '/', expr, this.next().read_expr()];
      case '%': return ['bin', '%', expr, this.next().read_expr()];
      case this.tok.T_POW:  return ['bin', '**', expr, this.next().read_expr()];
      case this.tok.T_SL:   return ['bin', '<<', expr, this.next().read_expr()];
      case this.tok.T_SR:   return ['bin', '>>', expr, this.next().read_expr()];

      // boolean operations
      case this.tok.T_BOOLEAN_OR:
      case this.tok.T_LOGICAL_OR:   return ['bool', '|', expr, this.next().read_expr()];

      case this.tok.T_BOOLEAN_AND:
      case this.tok.T_LOGICAL_AND:  return ['bool', '&', expr, this.next().read_expr()];

      case this.tok.T_LOGICAL_XOR:      return ['bool', '^', expr, this.next().read_expr()];
      case this.tok.T_IS_IDENTICAL:     return ['bool', '=', expr, this.next().read_expr()];
      case this.tok.T_IS_NOT_IDENTICAL: return ['bool', '!=', expr, this.next().read_expr()];
      case this.tok.T_IS_EQUAL:         return ['bool', '~', expr, this.next().read_expr()];
      case this.tok.T_IS_NOT_EQUAL:     return ['bool', '!~', expr, this.next().read_expr()];
      case '<':                       return ['bool', '<', expr, this.next().read_expr()];
      case '>':                       return ['bool', '>', expr, this.next().read_expr()];

      case this.tok.T_IS_SMALLER_OR_EQUAL:  return ['bool', '<=', expr, this.next().read_expr()];
      case this.tok.T_IS_GREATER_OR_EQUAL:  return ['bool', '>=', expr, this.next().read_expr()];
      case this.tok.T_SPACESHIP:            return ['bool', '<=>', expr, this.next().read_expr()];
      case this.tok.T_INSTANCEOF:           return ['bool', '?', expr, this.next().read_expr()];

      // extra operations :
      case this.tok.T_COALESCE: // php7 : $username = $_GET['user'] ?? 'nobody';
        return ['retif', ['sys', 'isset', expr], expr, this.next().read_expr()];
      case '?':
        var trueArg = null;
        if (this.next().token !== ':') {
          trueArg = this.read_expr();
        }
        this.expect(':').next();
        return ['retif', expr, trueArg, this.read_expr()];
    }
    return expr;
  }

  /**
   * <ebnf>
   * Reads an expression
   *  expr ::= @todo
   * </ebnf>
   */
  ,read_expr_item: function() {

    switch(this.token) {

      case '@':
        return ['silent', this.next().read_expr()];

      case '-':
      case '+':
      case '!':
      case '~':
        return this.node('unary')(this.token, this.next().read_expr());

      case '(':
        var expr = this.next().read_expr();
        this.expect(')').next();

        // handle dereferencable
        if (this.token === this.tok.T_OBJECT_OPERATOR) {
          return this.recursive_variable_chain_scan(expr, false);
        } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
          // @fixme - should avoid a new token (could be resolved)
          return this.node('deference')(
            expr, this.read_encapsed_string_item()
          );
        } else if (this.token === '(') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
          return this.node('call')(
            expr, this.read_function_argument_list()
          );
        } else {
          return expr;
        }

      case '`':
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
        var result = this.node('sys');
        var expr = this.next().read_encapsed_string('`');
        return result('shell', expr);

      case this.tok.T_LIST:
        var result = this.node('list');
        this.next().expect('(').next();
        var assignList = this.read_assignment_list();
        this.expect(')').next().expect('=').next();
        return result(assignList, this.read_expr());

      case this.tok.T_CLONE:
        return this.node('sys')(
          'clone', this.next().read_expr()
        );

      case this.tok.T_INC:
        var name = this.next().read_variable();
        return ['set', name, ['bin', '+', name, ['number', 1]]];

      case this.tok.T_DEC:
        var name = this.next().read_variable();
        return ['set', name, ['bin', '-', name, ['number', 1]]];

      case this.tok.T_NEW:
        return this.next().read_new_expr();

      case this.tok.T_ISSET:
        this.next().expect('(').next();
        var expr = this.read_list(this.read_expr, ',');
        this.expect(')').next();
        return ['sys', 'isset', expr];

      case this.tok.T_EMPTY:
        this.next().expect('(').next();
        var expr = this.read_expr();
        this.expect(')').next();
        return ['sys', 'empty', expr];

      case this.tok.T_INCLUDE:
        return (this.node('sys'))(
          'include',
          this.next().read_expr()
        );

      case this.tok.T_INCLUDE_ONCE:
        return (this.node('sys'))(
          'include_once',
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE:
        return (this.node('sys'))(
          'require',
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE_ONCE:
        return (this.node('sys'))(
          'require_once',
          this.next().read_expr()
        );

      case this.tok.T_EVAL:
        var result = this.node('sys');
        this.next().expect('(').next();
        var expr = this.read_expr();
        this.expect(')').next();
        return result('eval', expr);

      case this.tok.T_INT_CAST:
        return ['cast', 'int', this.next().read_expr()];

      case this.tok.T_DOUBLE_CAST:
        return ['cast', 'double', this.next().read_expr()];

      case this.tok.T_STRING_CAST:
        return ['cast', 'string', this.next().read_expr()];

      case this.tok.T_ARRAY_CAST:
        return ['cast', 'array', this.next().read_expr()];

      case this.tok.T_OBJECT_CAST:
        return ['cast', 'object', this.next().read_expr()];

      case this.tok.T_BOOL_CAST:
        return ['cast', 'boolean', this.next().read_expr()];

      case this.tok.T_UNSET_CAST:
        return ['sys', 'unset', this.next().read_expr()];

      case this.tok.T_EXIT:
        var result = this.node('sys');
        var expr = null;
        if ( this.next().token === '(' ) {
          if (this.next().token !== ')') {
            expr = this.read_expr();
            this.expect(')').next();
          } else {
            this.next();
          }
        }
        return result('exit', expr);

      case this.tok.T_PRINT:
        return (this.node('sys'))(
          'print',
          this.next().read_expr()
        );

      // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?
      case this.tok.T_YIELD:
        var result = ['yield', null, null];
        if (this.next().is('EXPR')) {
          // reads the yield return value
          result[1] = this.read_expr();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            // reads the yield returned key
            result[2] = this.next().read_expr();
          }
        }
        return result;

      // T_YIELD_FROM expr
      case this.tok.T_YIELD_FROM:
        return ['yield-from', this.next().read_expr()];

      case this.tok.T_FUNCTION:
        // @fixme later - removed static lambda function declarations (colides with static keyword usage)
        return this.read_function(true);

    }

    // SCALAR | VARIABLE
    var expr;
    if (this.is('VARIABLE')) {
      expr = this.read_variable();
      // VARIABLES SPECIFIC OPERATIONS
      switch(this.token) {
        case '=':
          if (this.next().token == '&') {
            if (this.next().token === this.tok.T_NEW) {
              return ['link', expr, this.next().read_new_expr()];
            } else {
              return ['link', expr, this.read_variable()];
            }
          } else {
            var node = this.node('set');
            var statement = this.token === this.tok.T_NEW ?
              this.next().read_new_expr() : this.read_expr();
            return node(expr, statement);
          }
        // operations :
        case this.tok.T_PLUS_EQUAL:
          return ['set', expr, ['bin', '+', expr, this.next().read_expr()]];
        case this.tok.T_MINUS_EQUAL:
          return ['set', expr, ['bin', '-', expr, this.next().read_expr()]];
        case this.tok.T_MUL_EQUAL:
          return ['set', expr, ['bin', '*', expr, this.next().read_expr()]];
        case this.tok.T_POW_EQUAL:
          return ['set', expr, ['bin', '**', expr, this.next().read_expr()]];
        case this.tok.T_DIV_EQUAL:
          return ['set', expr, ['bin', '/', expr, this.next().read_expr()]];
        case this.tok.T_CONCAT_EQUAL:
          // NB : convert as string and add
          return ['set', expr, ['bin', '.', expr, this.next().read_expr()]];
        case this.tok.T_MOD_EQUAL:
          return ['set', expr, ['bin', '%', expr, this.next().read_expr()]];
        case this.tok.T_AND_EQUAL:
          return ['set', expr, ['bin', '&', expr, this.next().read_expr()]];
        case this.tok.T_OR_EQUAL:
          return ['set', expr, ['bin', '|', expr, this.next().read_expr()]];
        case this.tok.T_XOR_EQUAL:
          return ['set', expr, ['bin', '^', expr, this.next().read_expr()]];
        case this.tok.T_SL_EQUAL:
          return ['set', expr, ['bin', '<<', expr, this.next().read_expr()]];
        case this.tok.T_SR_EQUAL:
          return ['set', expr, ['bin', '>>', expr, this.next().read_expr()]];
        case this.tok.T_INC:
          this.next();
          return ['post', '+', expr];
        case this.tok.T_DEC:
          this.next();
          return ['post', '-', expr];
      }
    } else if (this.is('SCALAR')) {
      expr = this.read_scalar();
      // handle dereferencable
      while(this.token !== this.EOF) {
        if (this.token === this.tok.T_OBJECT_OPERATOR) {
          expr = this.recursive_variable_chain_scan(expr, false);
        } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
          // @fixme - should avoid a new token (could be resolved)
          expr = this.node('deference')(expr, this.read_encapsed_string_item());
        } else if (this.token === '(') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
          expr = this.node('call')(expr, this.read_function_argument_list());
        } else {
          return expr;
        }
      }
    } else {
      this.error('EXPR');
    }

    // returns variable | scalar
    return expr;

  }
  /**
   * <ebnf>
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * </ebnf>
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  ,read_new_expr: function() {
    var result = this.node('new');
    if (this.token === this.tok.T_CLASS) {
      // Annonymous class declaration
      var propExtends = false, propImplements = false;
      if (this.next().token == this.tok.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == this.tok.T_IMPLEMENTS) {
        propImplements = this.next().read_list(
          this.read_namespace_name,
          ','
        );
      }
      return result(
        false           // class name => false : means it's an annonymous class
        ,propExtends
        ,propImplements
        ,this.expect('{').next().read_class_body()
      );
    } else {
      // Already existing class
      var name = this.read_class_name_reference();
      var args = [];
      if (this.token === '(') {
        args = this.read_function_argument_list();
      }
      return result(name, args);
    }
  }
  /**
   * Reads a class name
   * <ebnf>
   * class_name_reference ::= namespace_name | variable
   * </ebnf>
   */
  ,read_class_name_reference: function() {
    if (this.token === '\\' || this.token === this.tok.T_STRING) {
      var result = this.read_namespace_name();
      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      }
      return result;
    } else if (this.is('VARIABLE')) {
      return this.read_variable(true);
    } else {
      this.expect([this.tok.T_STRING, 'VARIABLE']);
    }
  }
  /**
   * <ebnf>
   *   assignment_list ::= assignment_list_element (',' assignment_list_element?)*
   * </ebnf>
   */
  ,read_assignment_list: function(innerList) {
    return this.read_list(
      this.read_assignment_list_element, ','
    );
  }
  /**
   * <ebnf>
   *  assignment_list_element ::= (variable | (T_LIST '(' assignment_list ')'))?
   * </ebnf>
   */
  ,read_assignment_list_element: function() {
    var result = null;
    if (this.token === this.tok.T_LIST) {
      result = this.node('list');
      result = result(
        this.next().expect('(').next().read_assignment_list(),
        false
      );
      this.expect(')').next();
    } else if (this.token !== ',' && this.token !== ')') {
      result = this.read_variable();
    }
    return result;
  }
};
