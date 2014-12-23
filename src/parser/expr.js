module.exports = function(api, tokens, EOF) {
  return {

    read_expr: function() {
      var expr = this.read_expr_item();
      switch(this.token) {
        // binary operations
        case '|': return ['bin', '|', expr, this.next().read_expr()];
        case '&': return ['bin', '&', expr, this.next().read_expr()];
        case '^': return ['bin', '^', expr, this.next().read_expr()];
        case '.': return ['bin', '.', expr, this.next().read_expr()];
        case '+': return ['bin', '+', expr, this.next().read_expr()];
        case '-': return ['bin', '-', expr, this.next().read_expr()];
        case '*': return ['bin', '*', expr, this.next().read_expr()];
        case '/': return ['bin', '/', expr, this.next().read_expr()];
        case '%': return ['bin', '%', expr, this.next().read_expr()];
        case tokens.T_POW:  return ['bin', '**', expr, this.next().read_expr()];
        case tokens.T_SL:   return ['bin', '<<', expr, this.next().read_expr()];
        case tokens.T_SR:   return ['bin', '>>', expr, this.next().read_expr()];

        // boolean operations
        case tokens.T_BOOLEAN_OR:
        case tokens.T_LOGICAL_OR:   return ['bool', '|', expr, this.next().read_expr()];

        case tokens.T_BOOLEAN_AND:
        case tokens.T_LOGICAL_AND:  return ['bool', '&', expr, this.next().read_expr()];

        case tokens.T_LOGICAL_XOR:      return ['bool', '^', expr, this.next().read_expr()];
        case tokens.T_IS_IDENTICAL:     return ['bool', '=', expr, this.next().read_expr()];
        case tokens.T_IS_NOT_IDENTICAL: return ['bool', '!=', expr, this.next().read_expr()];
        case tokens.T_IS_EQUAL:         return ['bool', '~', expr, this.next().read_expr()];
        case tokens.T_IS_NOT_EQUAL:     return ['bool', '!~', expr, this.next().read_expr()];
        case '<':                       return ['bool', '<', expr, this.next().read_expr()];
        case '>':                       return ['bool', '>', expr, this.next().read_expr()];

        case tokens.T_IS_SMALLER_OR_EQUAL:  return ['bool', '<=', expr, this.next().read_expr()];
        case tokens.T_IS_GREATER_OR_EQUAL:  return ['bool', '>=', expr, this.next().read_expr()];
        case tokens.T_INSTANCEOF:           return ['bool', '?', expr, this.next().read_expr()];
        
        // extra operations : 
        case tokens.T_COALESCE: // php7 : $username = $_GET['user'] ?? 'nobody';
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
          return ['silence', this.next().read_expr()];

        case '-':
        case '+':
        case '!':
        case '~':
          return ['unary', this.token, this.next().read_expr()];

        case '(':
          var expr = this.next().read_expr();
          this.expect(')').next();
          return expr;

        case '`':
          var expr = null;
          if (this.next().token === tokens.T_ENCAPSED_AND_WHITESPACE) {
            expr = this.text();
            this.next().expect('`').next();
          } else if (this.token !== '`' ) {
            expr = this.read_encaps_list();
          }
          return ['sys', 'shell', expr];

        case tokens.T_LIST:
          return this.read_assignment_list();

        case tokens.T_CLONE:
          return ['sys', 'clone', this.next().read_expr()];

        case tokens.T_INC:
          var name = this.next().read_variable();
          return ['set', name, ['bin', '+', name, ['number', 1]]];

        case tokens.T_DEC:
          var name = this.next().read_variable();
          return ['set', name, ['bin', '-', name, ['number', 1]]];

        case tokens.T_NEW:
          return this.next().read_new_expr();

        case tokens.T_ISSET:
          this.next().expect('(').next();
          // '(' isset_variables ')' { $$ = $3; }
          return ['sys', 'isset'];  // @todo

        case tokens.T_EMPTY:
          this.next().expect('(').next();
          var expr = this.read_expr();
          this.expect(')').next();
          return ['sys', 'empty', expr];

        case tokens.T_INCLUDE:
          return ['sys', 'include', this.next().read_expr()];

        case tokens.T_INCLUDE_ONCE:
          return ['sys', 'include_once', this.next().read_expr()];

        case tokens.T_REQUIRE:
          return ['sys', 'require', this.next().read_expr()];

        case tokens.T_REQUIRE_ONCE:
          return ['sys', 'require', this.next().read_expr()];

        case tokens.T_EVAL:
          this.next().expect('(').next();
          var expr = this.read_expr();
          this.expect(')').next();
          return ['sys', 'eval', expr];

        case tokens.T_INT_CAST:
          return ['cast', 'int', this.next().read_expr()];

        case tokens.T_DOUBLE_CAST:
          return ['cast', 'double', this.next().read_expr()];

        case tokens.T_STRING_CAST:
          return ['cast', 'string', this.next().read_expr()];

        case tokens.T_ARRAY_CAST:
          return ['cast', 'array', this.next().read_expr()];

        case tokens.T_OBJECT_CAST:
          return ['cast', 'object', this.next().read_expr()];

        case tokens.T_BOOL_CAST:
          return ['cast', 'boolean', this.next().read_expr()];

        case tokens.T_UNSET_CAST:
          return ['sys', 'unset', this.next().read_expr()];

        case tokens.T_EXIT:
          var expr = null;
          if ( this.next().token === '(' ) {
            if (this.next().token !== ')') {
              expr = this.read_expr();
              this.expect(')').next();
            }
          }
          return ['sys', 'exit', expr];

        case tokens.T_PRINT:
          return ['sys', 'print', this.next().read_expr()];

        case tokens.T_YIELD:
          var result = ['yield', null, null];
          if (this.next().is('expr')) {
            // reads the yield return value
            result[1] = this.read_expr();
            if (this.token === tokens.T_DOUBLE_ARROW) {
              // reads the yield returned key
              result[2] = this.read_expr();
            }
          }
          return result;

        case tokens.T_STATIC:
        case tokens.T_FUNCTION:
          // @wtf
          var isStatic = false;
          if (this.token === tokens.T_STATIC) {
            this.next();
            isStatic = true;
          }
          return this.read_function_declaration();

      }

      // SCALAR | VARIABLE
      var expr;
      if (this.is('VARIABLE')) {
        expr = this.read_variable();
        // VARIABLES SPECIFIC OPERATIONS
        switch(this.token) {
          case '=':
            if (this.next().token == '&') {
              if (this.next().token === tokens.T_NEW) {
                return ['link', expr, this.next().read_new_expr()];
              } else {
                return ['link', expr, this.read_variable()];
              }
            } else {
              return ['set', expr, this.read_expr()];
            }
          // operations :
          case tokens.T_PLUS_EQUAL:
            return ['set', expr, ['bin', '+', expr, this.next().read_expr()]];
          case tokens.T_MINUS_EQUAL:
            return ['set', expr, ['bin', '-', expr, this.next().read_expr()]];
          case tokens.T_MUL_EQUAL:
            return ['set', expr, ['bin', '*', expr, this.next().read_expr()]];
          case tokens.T_POW_EQUAL:
            return ['set', expr, ['bin', '**', expr, this.next().read_expr()]];
          case tokens.T_DIV_EQUAL:
            return ['set', expr, ['bin', '/', expr, this.next().read_expr()]];
          case tokens.T_CONCAT_EQUAL: 
            // NB : convert as string and add
            return ['set', expr, ['bin', '.', expr, this.next().read_expr()]];
          case tokens.T_MOD_EQUAL:
            return ['set', expr, ['bin', '%', expr, this.next().read_expr()]];
          case tokens.T_AND_EQUAL:
            return ['set', expr, ['bin', '&', expr, this.next().read_expr()]];
          case tokens.T_OR_EQUAL:
            return ['set', expr, ['bin', '|', expr, this.next().read_expr()]];
          case tokens.T_XOR_EQUAL:
            return ['set', expr, ['bin', '^', expr, this.next().read_expr()]];
          case tokens.T_SL_EQUAL:
            return ['set', expr, ['bin', '<<', expr, this.next().read_expr()]];
          case tokens.T_SR_EQUAL:
            return ['set', expr, ['bin', '>>', expr, this.next().read_expr()]];
          case tokens.T_INC:
            this.next();
            return ['post', '+', expr];
          case tokens.T_DEC:
            this.next();
            return ['post', '-', expr];
        } 
      } else if (this.is('SCALAR')) {
        expr = this.read_scalar();
      } else {
        this.error('EXPR');
      }

      // returns variable | scalar
      return expr;

    }
    /**
     * <ebnf>
     *    new_expr ::= T_NEW
     * </ebnf>
     */
    ,read_new_expr: function() {
      // @todo
      return ['new', this.token];
    }
    /**
     * <ebnf>
     *   assignment_list ::= T_LIST '(' ((variable | assignment_list) (',' (variable | assignment_list))*)? ')'
     * </ebnf>
     */
    ,read_assignment_list: function(innerList) {
      var assignList = [];
      this.expect(tokens.T_LIST).next().expect('(').next();
      while(this.token !== ')' && this.token != EOF) {
        if (this.token === tokens.T_LIST) {
          assignList.push(this.read_assignment_list(true));
        } else {
          assignList.push(this.read_variable());
        }
        if (this.token !== ',') break;
        this.next();
      }
      this.expect(')').next();
      return ['list', assignList, innerList ? false : this.read_expr()];
    }
  };
};