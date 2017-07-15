/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * reading a list of top statements (helper for top_statement*)
   * ```ebnf
   *  top_statements ::= top_statement*
   * ```
   */
  read_top_statements: function() {
    var result = [];
    while(this.token !== this.EOF && this.token !== '}') {
      var statement = this.read_top_statement();
      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }
    return result;
  }
  /**
   * reading a top statement
   * ```ebnf
   *  top_statement ::=
   *       namespace | function | class
   *       | interface | trait
   *       | use_statements | const_list
   *       | statement
   * ```
   */
  ,read_top_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        if (this.token === this.tok.T_CLASS) {
          return this.read_class(flag);
        } else {
          this.error(this.tok.T_CLASS);
          this.next();
          return null;
        }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_USE:
        return this.read_use_statement();
      case this.tok.T_CONST:
        return this.next().read_const_list();
      case this.tok.T_NAMESPACE:
        return this.read_namespace();
      case this.tok.T_HALT_COMPILER:
        var result = this.node('halt');
        if (this.next().expect('(')) this.next();
        if (this.expect(')')) this.next();
        this.expect(';');
        this.lexer.done = true;
        return result(this.lexer._input.substring(
          this.lexer.offset
        ));
      default:
        return this.read_statement();
    }
  }
  /**
   * reads a list of simple inner statements (helper for inner_statement*)
   * ```ebnf
   *  inner_statements ::= inner_statement*
   * ```
   */
  ,read_inner_statements: function() {
    var result = [];
    while(this.token != this.EOF && this.token !== '}') {
      var statement = this.read_inner_statement();
      if (statement) {
        if (Array.isArray(statement)) {
          result = result.concat(statement);
        } else {
          result.push(statement);
        }
      }
    }
    return result;
  }
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * ```
   */
  ,read_const_list: function() {
    var result = this.read_list(function() {
      this.expect(this.tok.T_STRING);
      var result = this.node('constant');
      var name = this.text();
      if (this.next().expect('=')) {
        return result(name, this.next().read_expr());
      } else {
        // fallback
        return result(name, null);
      }
    }, ',', false);
    this.expectEndOfStatement();
    return result;
  }
  /**
   * Reads a list of constants declaration
   * ```ebnf
   *   declare_list ::= T_STRING '=' expr (',' T_STRING '=' expr)*
   * ```
   * @retrurn {Object}
   */
  ,read_declare_list: function() {
    var result = {};
    while(this.token != this.EOF && this.token !== ')') {
      this.expect(this.tok.T_STRING);
      var name = this.text().toLowerCase();
      if (this.next().expect('=')) {
        result[name] = this.next().read_expr();
      } else {
        result[name] = null;
      }
      if (this.token !== ',') break;
      this.next();
    }
    return result;
  }
  /**
   * reads a simple inner statement
   * ```ebnf
   *  inner_statement ::= '{' inner_statements '}' | token
   * ```
   */
  ,read_inner_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function(false, false);
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        if (this.token === this.tok.T_CLASS) {
          return this.read_class(flag);
        } else {
          this.error(this.tok.T_CLASS);
          // graceful mode : ignore token & go next
          this.next();
          return null;
        }
      case this.tok.T_CLASS:
        return this.read_class([0, 0, 0]);
      case this.tok.T_INTERFACE:
        return this.read_interface();
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_HALT_COMPILER:
        this.raiseError(
          '__HALT_COMPILER() can only be used from the outermost scope'
        );
        // fallback : returns a node but does not stop the parsing
        var node = this.node('halt');
        this.next().expect('(') && this.next();
        this.expect(')') && this.next();
        node = node(this.lexer._input.substring(
          this.lexer.offset
        ));
        this.expect(';') && this.next();
        return node;
      default:
        return this.read_statement();
    }
  }
  /**
   * Reads statements
   */
  ,read_statement: function() {

    switch(this.token) {

      case '{': return this.read_code_block(false);

      case this.tok.T_IF: return this.next().read_if();

      case this.tok.T_SWITCH: return this.read_switch();

      case this.tok.T_FOR: return this.next().read_for();

      case this.tok.T_FOREACH: return this.next().read_foreach();

      case this.tok.T_WHILE: return this.next().read_while();

      case this.tok.T_DO: return this.next().read_do();

      case this.tok.T_COMMENT: return this.read_comment();

      case this.tok.T_DOC_COMMENT: return this.read_doc_comment();

      case this.tok.T_RETURN:
        var result = this.node('return'), expr = null;
        if (!this.next().is('EOS')) {
          expr = this.read_expr();
        }
        this.expectEndOfStatement();
        return result(expr);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L429
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE:
        var result = this.node(
          this.token === this.tok.T_CONTINUE ? 'continue' : 'break'
        ), level = null;
        this.next(); // look ahead
        if (this.token !== ';' && this.token !== this.tok.T_CLOSE_TAG) {
          level = this.read_expr();
        }
        this.expectEndOfStatement();
        return result(level);

      case this.tok.T_GLOBAL:
        var result = this.node('global');
        var items = this.next().read_list(this.read_simple_variable, ',');
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_STATIC:
        var current = [this.token, this.lexer.getState()];
        var result = this.node('static');
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          var expr = this.next().read_expr();
          this.expect(';') && this.nextWithComments();
          return expr;
        }
        if (this.token === this.tok.T_FUNCTION) {
          return this.read_function(true, [0, 1, 0]);
        }
        var items = this.read_variable_declarations();
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_ECHO:
        var result = this.node('echo');
        var args = this.next().read_list(this.read_expr, ',');
        this.expectEndOfStatement();
        return result(args);

      case this.tok.T_INLINE_HTML:
        var result = this.node('inline'), value = this.text();
        this.next();
        return result(value);

      case this.tok.T_UNSET:
        var result = this.node('unset');
        this.next().expect('(') && this.next();
        var items = this.read_list(this.read_variable, ',');
        this.expect(')') && this.next();
        this.expect(';') && this.nextWithComments();
        return result(items);

      case this.tok.T_DECLARE:
        var result = this.node('declare'),
          what,
          body = [],
          mode;
        this.next().expect('(') && this.next();
        what = this.read_declare_list();
        this.expect(')') && this.next();
        if (this.token === ':') {
          this.nextWithComments();
          while(this.token != this.EOF && this.token !== this.tok.T_ENDDECLARE) {
            // @todo : check declare_statement from php / not valid
            body.push(this.read_top_statement());
          }
          this.expect(this.tok.T_ENDDECLARE) && this.next();
          this.expectEndOfStatement();
          mode = this.ast.declare.MODE_SHORT;
        } else if (this.token === '{') {
          this.nextWithComments();
          while(this.token != this.EOF && this.token !== '}') {
            // @todo : check declare_statement from php / not valid
            body.push(this.read_top_statement());
          }
          this.expect('}') && this.next();
          mode = this.ast.declare.MODE_BLOCK;
        } else {
          this.expect(';') && this.nextWithComments();
          while(this.token != this.EOF && this.token !== this.tok.T_DECLARE) {
            // @todo : check declare_statement from php / not valid
            body.push(this.read_top_statement());
          }
          mode = this.ast.declare.MODE_NONE;
        }
        return result(what, body, mode);

      case this.tok.T_TRY:
        return this.read_try();

      case this.tok.T_THROW:
        var result = this.node('throw');
        var expr = this.next().read_expr();
        this.expectEndOfStatement();
        return result(expr);

      case ';': // ignore this (extra ponctuation)
      case this.tok.T_CLOSE_TAG: // empty tag
        this.next();
        return null;

      case this.tok.T_STRING:
        var current = [this.token, this.lexer.getState()];
        var label = this.text();
        // AST : https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L457
        if (this.next().token === ':') {
          var result = this.node('label');
          this.next();
          return result(label);
        }

        // default fallback expr / T_STRING '::' (etc...)
        this.lexer.tokens.push(current);
        var expr = this.next().read_expr();
        this.expectEndOfStatement();
        return expr;

      case this.tok.T_GOTO:
        var result = this.node('goto'), label = null;
        if (this.next().expect(this.tok.T_STRING)) {
          label = this.text();
          this.next().expectEndOfStatement();
        }
        return result(label);

      default: // default fallback expr
        var expr = this.read_expr();
        this.expectEndOfStatement();
        return expr;
    }
  }
  /**
   * ```ebnf
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * ```
   */
  ,read_code_block: function(top) {
    var result = this.node('block');
    this.expect('{') && this.nextWithComments();
    var body = top ?
      this.read_top_statements()
      : this.read_inner_statements()
    ;
    this.expect('}') && this.nextWithComments();
    return result(null, body);
  }
};
