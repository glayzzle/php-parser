/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * reading a list of top statements (helper for top_statement*)
   * <ebnf>
   *  top_statements ::= top_statement*
   * </ebnf>
   */
  read_top_statements: function() {
    var result = [];
    while(this.token !== this.EOF && this.token !== '}') {
      var statement = this.read_top_statement();
      if (statement) {
        if (typeof statement[0] === 'string') {
          result.push(statement);
        } else {
          result = result.concat(statement);
        }
      }
    }
    return result;
  }
  /**
   * reading a top statement
   * <ebnf>
   *  top_statement ::=
   *       namespace | function | class
   *       | interface | trait
   *       | use_statements | const_list
   *       | statement
   * </ebnf>
   */
  ,read_top_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function();
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        switch(this.token) {
          case this.tok.T_CLASS:
            return this.read_class(flag);
          case this.tok.T_INTERFACE:
            return this.read_interface(flag);
          default:
            this.error([this.tok.T_CLASS, this.tok.T_INTERFACE]);
        }
      case this.tok.T_CLASS:
        return this.read_class(0);
      case this.tok.T_INTERFACE:
        return this.read_interface(0);
      case this.tok.T_TRAIT:
        return this.read_trait();
      case this.tok.T_USE:
        var expr = this.read_use_statements();
        this.expect(';').next();
        return expr;
      case this.tok.T_CONST:
        return this.next().read_const_list();
      case this.tok.T_NAMESPACE:
        return this.read_namespace();
      default:
        return this.read_statement();
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
    while(this.token != this.EOF && this.token !== '}') {
      var statement = this.read_inner_statement();
      if (statement) {
        if (typeof statement[0] === 'string') {
          result.push(statement);
        } else {
          result = result.concat(statement);
        }
      }
    }
    return result;
  }
  /**
   * Reads a list of constants declaration
   * <ebnf>
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)* ';'
   * </ebnf>
   */
  ,read_const_list: function() {
    var result = this.read_list(function() {
      this.expect(this.tok.T_STRING);
      var result = this.node(this.text());
      this.next().expect('=').next();
      return result(this.read_expr());
    }, ',', false, true);
    this.expectEndOfStatement();
    return ['const', result];
  }
  /**
   * Reads a list of constants declaration
   * <ebnf>
   *   const_list ::= T_CONST T_STRING '=' expr (',' T_STRING '=' expr)*
   * </ebnf>
   */
  ,read_declare_list: function() {
    return this.read_list(function() {
      this.expect(this.tok.T_STRING);
      var name = this.text();
      this.next().expect('=').next();
      return [name, this.read_expr()];
    }, ',');
  }
  /**
   * reads a simple inner statement
   * <ebnf>
   *  inner_statement ::= '{' inner_statements '}' | token
   * </ebnf>
   */
  ,read_inner_statement: function() {
    switch(this.token) {
      case this.tok.T_FUNCTION:
        return this.read_function();
      // optional flags
      case this.tok.T_ABSTRACT:
      case this.tok.T_FINAL:
        var flag = this.read_class_scope();
        switch(this.token) {
          case this.tok.T_CLASS:
            return this.read_class(flag);
          case this.tok.T_INTERFACE:
            return this.read_interface(flag);
          default:
            this.error([this.tok.T_CLASS, this.tok.T_INTERFACE]);
        }
      case this.tok.T_CLASS:
        return this.read_class(0);
      case this.tok.T_INTERFACE:
        return this.read_interface(0);
      case this.tok.T_TRAIT:
        return this.read_trait();
      // @todo T_HALT_COMPILER '(' ')' ';'
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
      case this.tok.T_BREAK:
      case this.tok.T_CONTINUE:
        var mode;
        switch(this.token) {
          case this.tok.T_RETURN:     mode = 'return';    break;
          case this.tok.T_BREAK:      mode = 'break';     break;
          case this.tok.T_CONTINUE:   mode = 'continue';  break;
        }
        var expr = null;
        if (!this.next().is('EOS')) {
          expr = this.read_expr();
        }
        this.expectEndOfStatement();
        return [mode, expr];

      case this.tok.T_GLOBAL:
        var items = this.next().read_list(this.read_simple_variable, ',');
        this.expectEndOfStatement();
        return ['global', items];

      case this.tok.T_STATIC:
        var current = [this.token, this.lexer.getState()];
        var result = this.node('global');
        if (this.next().token === this.tok.T_DOUBLE_COLON) {
          // static keyword for a class
          this.lexer.tokens.push(current);
          var expr = this.next().read_expr();
          this.expect(';').nextWithComments();
          return expr;
        }
        var items = this.read_list(function() {
          var name = this.expect(this.tok.T_VARIABLE).text();
          var value = null;
          if (this.next().token === '=') {
            value = this.next().read_expr();
          }
          return [name, value];
        }, ',');
        this.expectEndOfStatement();
        return result(items);

      case this.tok.T_ECHO:
        var items = this.next().read_list(this.read_expr, ',');
        this.expectEndOfStatement();
        return ['sys', 'echo', items];

      case this.tok.T_INLINE_HTML:
        var text = ['string', this.text()];
        this.next();
        return ['sys', 'echo', text];

      case this.tok.T_UNSET:
        this.next().expect('(').next();
        var items = this.read_list(this.read_variable, ',');
        this.expect(')').next().expect(';').next();
        return ['sys', 'unset', items];

      case this.tok.T_DECLARE:
        var result = this.node('declare');
        this.next().expect('(').next();
        var options = this.read_declare_list();
        this.expect(')').nextWithComments();
        var body = this.read_statement();
        return result(options, body);
        break;

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
        if (this.next().token === ':') {
          var result = this.node('label');
          this.next();
          return result(label);
        } else {
          // default fallback expr
          this.lexer.tokens.push(current);
          var expr = this.next().read_expr();
          this.expect([';', this.tok.T_CLOSE_TAG]).next();
          return expr;
        }

      case this.tok.T_GOTO:
        var result = this.node('goto');
        var label = this.next().expect(this.tok.T_STRING).text();
        this.next().expectEndOfStatement();
        return result(label);

      default: // default fallback expr
        var expr = this.read_expr();
        this.expectEndOfStatement();
        return expr;
    }
  }
  /**
   * <ebnf>
   *  code_block ::= '{' (inner_statements | top_statements) '}'
   * </ebnf>
   */
  ,read_code_block: function(top) {
    this.expect('{').nextWithComments();
    var body = top ?
      this.read_top_statements()
      : this.read_inner_statements()
    ;
    this.expect('}').nextWithComments();
    return body;
  }
};
