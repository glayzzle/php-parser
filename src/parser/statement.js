/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
    /**
     * reading a list of top statements (helper for top_statement*)
     * <ebnf>
     *  top_statements ::= top_statement*
     * </ebnf>
     */
    read_top_statements: function() {
      var result = [];
      while(this.token !== EOF && this.token !== '}') {
        result.push(this.read_top_statement());
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
        case tokens.T_FUNCTION:
          return this.read_function();
        // optional flags
        case tokens.T_ABSTRACT:
        case tokens.T_FINAL:
          var flag = this.read_class_scope();
          switch(this.token) {
            case tokens.T_CLASS:
              return this.read_class(flag);
            case tokens.T_INTERFACE:
              return this.read_interface(flag);
            default:
              this.error([tokens.T_CLASS, tokens.T_INTERFACE]);
          }
        case tokens.T_CLASS:
          return this.read_class(0);
        case tokens.T_INTERFACE:
          return this.read_interface(0);
        case tokens.T_TRAIT:
          return this.read_trait();
        case tokens.T_USE:
          return this.read_use_statements(0);
        case tokens.T_CONST:
          return this.next().read_const_list();
        case tokens.T_NAMESPACE:
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
      while(this.token != EOF && this.token !== '}') {
        result.push(this.read_inner_statement());
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
        this.expect(tokens.T_STRING);
        var name = this.text();
        this.next().expect('=').next();
        return [name, this.read_expr()];
      }, ',');
      this.expect(';').next();
      return ['const', result];
    }
    /**
     * reads a simple inner statement
     * <ebnf>
     *  inner_statement ::= '{' inner_statements '}' | token
     * </ebnf>
     */
    ,read_inner_statement: function() {
      return this.read_statement();
    }
    /**
     * Reads statements
     */
    ,read_statement: function() {

      switch(this.token) {

        case '{': return this.read_code_block(false);

        case tokens.T_IF: return this.next().read_if();

        case tokens.T_SWITCH: return this.read_switch();

        case tokens.T_FOR: return this.next().read_for();

        case tokens.T_FOREACH: return this.next().read_foreach();

        case tokens.T_WHILE: return this.next().read_while();

        case tokens.T_DO: return this.next().read_do();

        case tokens.T_RETURN:
        case tokens.T_BREAK:
        case tokens.T_CONTINUE:
          var mode;
          switch(this.token) {
            case tokens.T_RETURN:     mode = 'return';    break;
            case tokens.T_BREAK:      mode = 'break';     break;
            case tokens.T_CONTINUE:   mode = 'continue';  break;
          }
          var expr = null;
          if (this.next().token != ';') {
            expr = this.read_expr();
            this.expect(';').next();
          }
          
          return [mode, expr];

        case tokens.T_GLOBAL:
          var items = this.next().read_list(this.read_simple_variable, ',');
          this.expect(';').next();
          return ['global', items];

        case tokens.T_STATIC:
          if (this.next().token === tokens.T_DOUBLE_COLON) {
            // static keyword for a class 
            this.lexer.unput('static::');
            var expr = this.next().read_expr();
            this.expect(';').next();
            return expr;
          }
          var items = this.read_list(function() {
            var name = this.expect(tokens.T_VARIABLE).text();
            var value = null;
            if (this.next().token === '=') {
              value = this.next().read_expr();
            }
            return [name, value];
          }, ',');
          this.expect(';').next();
          return ['global', items];

        case tokens.T_ECHO:
          var items = this.next().read_list(this.read_expr, ',');
          this.expect(';').next();
          return ['sys', 'echo', items];

        case tokens.T_INLINE_HTML:
          var text = ['string', this.text()];
          this.next();
          return ['sys', 'echo', text];

        case tokens.T_UNSET:
          this.next().expect('(').next();
          var items = this.read_list(this.read_variable, ',');
          this.expect(')').next().expect(';').next();
          return ['sys', 'unset', items];

        case tokens.T_DECLARE:
          this.next().expect('(').next();
          var options = this.read_list(this.read_const_list, ',');
          this.expect(')').next();
          var body = this.read_statement();
          return ['declare', options, body]
          break;

        case tokens.T_TRY:
          return this.read_try();

        case tokens.T_THROW:
          var expr = this.next().read_expr();
          this.expect(';').next();
          return ['throw', expr];

        case ';': // ignore this (extra ponctuation)
          this.next()
          return null;

        /**
         * @dontfixme DONT WANNA IMPLEMENT GOTO !
         * T_GOTO T_STRING ';' | T_STRING ':'
         */

        default: // default fallback expr
          var expr = this.read_expr();
          this.expect(';').next();
          return expr;
      }
    }
    /**
     * <ebnf>
     *  code_block ::= '{' (inner_statements | top_statements) '}'
     * </ebnf>
     */
    ,read_code_block: function(top) {
      this.expect('{').next();
      var body = top ?
        this.read_top_statements()
        : this.read_inner_statements()
      ;
      this.expect('}').next();
      return body;
    }
  };
};