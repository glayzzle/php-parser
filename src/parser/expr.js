/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {

  read_expr: function() {
    var result = this.node();
    var expr = this.read_expr_item();
    // binary operations
    if (this.token === '|')
      return result('bin', '|', expr, this.next().read_expr());
    if (this.token === '&')
      return result('bin', '&', expr, this.next().read_expr());
    if (this.token === '^')
      return result('bin', '^', expr, this.next().read_expr());
    if (this.token === '.')
      return result('bin', '.', expr, this.next().read_expr());
    if (this.token === '+')
      return result('bin', '+', expr, this.next().read_expr());
    if (this.token === '-')
      return result('bin', '-', expr, this.next().read_expr());
    if (this.token === '*')
      return result('bin', '*', expr, this.next().read_expr());
    if (this.token === '/')
      return result('bin', '/', expr, this.next().read_expr());
    if (this.token === '%')
      return result('bin', '%', expr, this.next().read_expr());
    if (this.token === this.tok.T_POW)
      return result('bin', '**', expr, this.next().read_expr());
    if (this.token === this.tok.T_SL)
      return result('bin', '<<', expr, this.next().read_expr());
    if (this.token === this.tok.T_SR)
      return result('bin', '>>', expr, this.next().read_expr());
    // more binary operations (formerly bool)
    if (this.token === this.tok.T_BOOLEAN_OR)
      return result('bin', '||', expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_OR)
      return result('bin', 'or', expr, this.next().read_expr());
    if (this.token === this.tok.T_BOOLEAN_AND)
      return result('bin', '&&', expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_AND)
      return result('bin', 'and', expr, this.next().read_expr());
    if (this.token === this.tok.T_LOGICAL_XOR)
      return result('bin', 'xor', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_IDENTICAL)
      return result('bin', '===', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_NOT_IDENTICAL)
      return result('bin', '!==', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_EQUAL)
      return result('bin', '==', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_NOT_EQUAL)
      return result('bin', '!=', expr, this.next().read_expr());
    if (this.token === '<')
      return result('bin', '<', expr, this.next().read_expr());
    if (this.token === '>')
      return result('bin', '>', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_SMALLER_OR_EQUAL)
      return result('bin', '<=', expr, this.next().read_expr());
    if (this.token === this.tok.T_IS_GREATER_OR_EQUAL)
      return result('bin', '>=', expr, this.next().read_expr());
    if (this.token === this.tok.T_SPACESHIP)
      return result('bin', '<=>', expr, this.next().read_expr());
    if (this.token === this.tok.T_INSTANCEOF)
      return result('bin', 'instanceof', expr, this.next().read_expr());

    // extra operations :
    // $username = $_GET['user'] ?? 'nobody';
    if (this.token === this.tok.T_COALESCE)
      return result('bin', '??', expr, this.next().read_expr());

    // extra operations :
    // $username = $_GET['user'] ? true : false;
    if (this.token === '?') {
      var trueArg = null;
      if (this.next().token !== ':') {
        trueArg = this.read_expr();
      }
      this.expect(':') && this.next();
      return result('retif', expr, trueArg, this.read_expr());
    }

    return expr;
  }

  /**
   * ```ebnf
   * Reads an expression
   *  expr ::= @todo
   * ```
   */
  ,read_expr_item: function() {

    if (this.token === '@')
      return this.node('silent')(this.next().read_expr());
    if (this.token === '+')
      return this.node('unary')('+', this.next().read_expr());
    if (this.token === '!')
      return this.node('unary')('!', this.next().read_expr());
    if (this.token === '~')
      return this.node('unary')('~', this.next().read_expr());

    if (this.token === '-') {
      var result = this.node();
      this.next();
      if (
        this.token === this.tok.T_LNUMBER ||
        this.token === this.tok.T_DNUMBER
      ) {
        // negative number
        result = result('number', '-' + this.text());
        this.next();
        return result;
      } else {
        return result('unary', '-', this.read_expr());
      }
    }

    if (this.token === '(') {
      var node = this.node('parenthesis');
      var expr = this.next().read_expr();
      this.expect(')') && this.next();
      expr = node(expr);
      // handle dereferencable
      if (this.token === this.tok.T_OBJECT_OPERATOR) {
        return this.recursive_variable_chain_scan(expr, false);
      } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
        return this.read_dereferencable(expr);
      } else if (this.token === '(') {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
        return this.node('call')(
          expr, this.read_function_argument_list()
        );
      } else {
        return expr;
      }
    }

    if (this.token === '`') {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
      return this.next().read_encapsed_string('`');
    }

    if (this.token === this.tok.T_LIST) {
      var result = this.node('list'), assign = null;
      var isInner = this.innerList;
      if (!isInner) {
        assign = this.node('assign');
      }
      if (this.next().expect('(')) {
        this.next();
      }

      if (!this.innerList) this.innerList = true;
      var assignList = this.read_assignment_list();

      // check if contains at least one assignment statement
      var hasItem = false;
      for(var i = 0; i < assignList.length; i++) {
        if (assignList[i] !== null) {
          hasItem = true;
          break;
        }
      }
      if (!hasItem) {
        this.raiseError(
          'Fatal Error :  Cannot use empty list on line ' + this.lexer.yylloc.first_line
        );
      }
      if (this.expect(')')) {
        this.next();
      }

      if (!isInner) {
        this.innerList = false;
        if (this.expect('=')) {
          return assign(
            result(assignList),
            this.next().read_expr(),
            '='
          );
        } else {
          // fallback : list($a, $b);
          return result(assignList);
        }
      } else {
        return result(assignList);
      }
    }

    if (this.token === this.tok.T_CLONE)
      return this.node('clone')(
        this.next().read_expr()
      );

    switch(this.token) {

      case this.tok.T_INC:
        return this.node('pre')(
          '+', this.next().read_variable(false, false, false)
        );

      case this.tok.T_DEC:
        return this.node('pre')(
          '-', this.next().read_variable(false, false, false)
        );

      case this.tok.T_NEW:
        return this.next().read_new_expr();

      case this.tok.T_ISSET:
        var result = this.node('isset');
        if (this.next().expect('(')) {
          this.next();
        }
        var args = this.read_list(this.read_expr, ',');
        if (this.expect(')')) {
          this.next();
        }
        return result(args);

      case this.tok.T_EMPTY:
        var result = this.node('empty');
        if (this.next().expect('(')) {
          this.next();
        }
        var arg = this.read_expr();
        if (this.expect(')')) {
          this.next();
        }
        return result([arg]);

      case this.tok.T_INCLUDE:
        return this.node('include')(
          false, false,
          this.next().read_expr()
        );

      case this.tok.T_INCLUDE_ONCE:
        return this.node('include')(
          true, false,
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE:
        return this.node('include')(
          false, true,
          this.next().read_expr()
        );

      case this.tok.T_REQUIRE_ONCE:
        return this.node('include')(
          true, true,
          this.next().read_expr()
        );

      case this.tok.T_EVAL:
        var result = this.node('eval');
        if (this.next().expect('(')) {
          this.next();
        }
        var expr = this.read_expr();
        if (this.expect(')')) {
          this.next();
        }
        return result(expr);

      case this.tok.T_INT_CAST:
        return this.node('cast')('int', this.next().read_expr());

      case this.tok.T_DOUBLE_CAST:
        return this.node('cast')('double', this.next().read_expr());

      case this.tok.T_STRING_CAST:
        return this.node('cast')('string', this.next().read_expr());

      case this.tok.T_ARRAY_CAST:
        return this.node('cast')('array', this.next().read_expr());

      case this.tok.T_OBJECT_CAST:
        return this.node('cast')('object', this.next().read_expr());

      case this.tok.T_BOOL_CAST:
        return this.node('cast')('boolean', this.next().read_expr());

      case this.tok.T_UNSET_CAST:
        return this.node('unset')(
          this.next().read_expr()
        );

      case this.tok.T_EXIT:
        var result = this.node('exit');
        var status = null;
        if ( this.next().token === '(' ) {
          if (this.next().token !== ')') {
            status = this.read_expr();
            if (this.expect(')')) {
              this.next();
            }
          } else {
            this.next();
          }
        }
        return result(status);

      case this.tok.T_PRINT:
        return this.node('print')(
          this.next().read_expr()
        );

      // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?
      case this.tok.T_YIELD:
        var result = this.node('yield'), value = null, key = null;
        if (this.next().is('EXPR')) {
          // reads the yield return value
          value = this.read_expr();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            // reads the yield returned key
            key = value;
            value = this.next().read_expr();
          }
        }
        return result(value, key);

      // T_YIELD_FROM expr
      case this.tok.T_YIELD_FROM:
        var result = this.node('yieldfrom');
        var expr = this.next().read_expr();
        return result(expr);

      case this.tok.T_FUNCTION:
        return this.read_function(true);

      case this.tok.T_STATIC:
        var backup = [this.token, this.lexer.getState()];
        if (this.next().token === this.tok.T_FUNCTION) {
          // handles static function
          return this.read_function(true, [0, 1, 0]);
        } else {
          // rollback
          this.lexer.tokens.push(backup);
          this.next();
        }


    }

    // SCALAR | VARIABLE
    var expr;
    if (this.is('VARIABLE')) {
      var result = this.node();
      expr = this.read_variable(false, false, false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L877
      // should accept only a variable
      var isConst = (
        expr.kind === 'constref' || (
          expr.kind === 'staticlookup' &&
          expr.offset.kind === 'constref'
        )
      );

      // VARIABLES SPECIFIC OPERATIONS
      switch(this.token) {
        case '=':
          if (isConst) this.error('VARIABLE');
          var right;
          if (this.next().token == '&') {
            if (this.next().token === this.tok.T_NEW) {
              right = this.next().read_new_expr();
            } else {
              right = this.read_variable(false, false, true);
            }
          } else {
            right = this.read_expr();
          }
          return result('assign', expr, right, '=');

        // operations :
        case this.tok.T_PLUS_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '+=');

        case this.tok.T_MINUS_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '-=');

        case this.tok.T_MUL_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '*=');

        case this.tok.T_POW_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '**=');

        case this.tok.T_DIV_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '/=');

        case this.tok.T_CONCAT_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '.=');

        case this.tok.T_MOD_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '%=');

        case this.tok.T_AND_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '&=');

        case this.tok.T_OR_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '|=');

        case this.tok.T_XOR_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '^=');

        case this.tok.T_SL_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign', expr, this.next().read_expr(), '<<=');

        case this.tok.T_SR_EQUAL:
          if (isConst) this.error('VARIABLE');
          return result('assign',expr, this.next().read_expr(), '>>=');

        case this.tok.T_INC:
          if (isConst) this.error('VARIABLE');
          this.next();
          return result('post', '+', expr);
        case this.tok.T_DEC:
          if (isConst) this.error('VARIABLE');
          this.next();
          return result('post', '-', expr);
      }
    } else if (this.is('SCALAR')) {
      expr = this.read_scalar();
      // handle dereferencable
      while(this.token !== this.EOF) {
        if (this.token === this.tok.T_OBJECT_OPERATOR) {
          expr = this.recursive_variable_chain_scan(expr, false);
        } else if (this.token === this.tok.T_CURLY_OPEN || this.token === '[') {
          expr = this.read_dereferencable(expr);
        } else if (this.token === '(') {
          // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
          expr = this.node('call')(expr, this.read_function_argument_list());
        } else {
          return expr;
        }
      }
    } else {
      this.error('EXPR');
      this.next();
    }

    // returns variable | scalar
    return expr;

  }
  /**
   * ```ebnf
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * ```
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  ,read_new_expr: function() {
    var result = this.node('new');
    if (this.token === this.tok.T_CLASS) {
      var what = this.node('class');
      // Annonymous class declaration
      var propExtends = null, propImplements = null, body = null, args = [];
      if (this.next().token === '(') {
        args = this.read_function_argument_list();
      }
      if (this.token == this.tok.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == this.tok.T_IMPLEMENTS) {
        propImplements = this.next().read_name_list();
      }
      if (this.expect('{')) {
        body = this.next().read_class_body();
      }
      return result(
        what(
          null
          ,propExtends
          ,propImplements
          ,body
          ,[0, 0, 0]
        ), args
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
   * ```ebnf
   * class_name_reference ::= namespace_name | variable
   * ```
   */
  ,read_class_name_reference: function() {
    if (
      this.token === this.tok.T_NS_SEPARATOR ||
      this.token === this.tok.T_STRING ||
      this.token === this.tok.T_NAMESPACE
    ) {
      var result = this.read_namespace_name();
      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      }
      return result;
    } else if (this.is('VARIABLE')) {
      return this.read_variable(true, false, false);
    } else {
      this.expect([this.tok.T_STRING, 'VARIABLE']);
    }
  }
  /**
   * ```ebnf
   *   assignment_list ::= assignment_list_element (',' assignment_list_element?)*
   * ```
   */
  ,read_assignment_list: function() {
    return this.read_list(
      this.read_assignment_list_element, ','
    );
  }

  /**
   * ```ebnf
   *  assignment_list_element ::= expr | expr T_DOUBLE_ARROW expr
   * ```
   */
  ,read_assignment_list_element: function() {
    if (this.token === ',' || this.token === ')') return null;
    var result = this.read_expr_item();
    if (this.token === this.tok.T_DOUBLE_ARROW) {
      result = [
        'key',
        result,
        this.next().read_expr_item()
      ];
    }
    return result;
  }
};
