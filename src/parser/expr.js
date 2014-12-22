module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  expr ::=
     *  '&'? variable 
     * </ebnf>
     */
    read_expr: function() {

      switch(this.token) {

        case '@':
          return ['silence', this.read_expr()];

        case '-':
        case '+':
        case '!':
        case '~':
          return ['unary', this.token, this.read_expr()];

        case '(':
          var expr = this.read_expr();
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
          return ['preop', '+', this.read_variable()];

        case tokens.T_DEC:
          return ['preop', '-', this.read_variable()];

        case tokens.T_NEW:
          return this.read_new_expr();

        case tokens.T_ISSET:
          this.next().expect('(').next();
          // '(' isset_variables ')' { $$ = $3; }
          return null;  // @todo

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
            }
          }
          return ['sys', 'exit', expr];

        case tokens.T_PRINT:
          return ['sys', 'print', this.read_expr()];

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

        // T_SCALAR | VARIABLE
        default: 
          if (this.is('VARIABLE')) {
            return this.read_variable_expr();
          } else if (this.is('SCALAR')) {
            return this.read_scalar();
          } else {
            this.error('EXPR');
          }
      }
    }
    /**
     * <ebnf>
     *  variable_expr ::= variable (
     *    ('=' '&' (new_expr | variable)) | ((
     *      T_PLUS_EQUAL | T_CONCAT_EQUAL | T_MINUS_EQUAL ...
     *    ) EXPR)
     *  )
     * </ebnf>
     */
    ,read_variable_expr: function() {
      var variable = this.read_variable();
      switch(this.token) {
        case '=':
          var ref = this.is_reference();
          if (ref) { // set byref
            if (this.token === tokens.T_NEW) {
              return ['set', 'ref', variable, this.read_new_expr()];
            } else {
              return ['set', 'ref', variable, this.read_variable()];
            }
          } else {
            return ['set', false, variable, this.read_expr()];
          }

        case tokens.T_PLUS_EQUAL:
        case tokens.T_CONCAT_EQUAL:
          return ['set', '+', variable, this.read_expr()];

        case tokens.T_MINUS_EQUAL:
          return ['set', '-', variable, this.read_expr()];

        case tokens.T_MUL_EQUAL:
          return ['set', '*', variable, this.read_expr()];

        case tokens.T_POW_EQUAL:
          return ['set', '**', variable, this.read_expr()];

        case tokens.T_DIV_EQUAL:
          return ['set', '/', variable, this.read_expr()];

        case tokens.T_MOD_EQUAL:
          return ['set', '%', variable, this.read_expr()];

        case tokens.T_OR_EQUAL:
          return ['set', '|', variable, this.read_expr()];

        case tokens.T_AND_EQUAL:
          return ['set', '&', variable, this.read_expr()];

        case tokens.T_SL_EQUAL:
          return ['set', '<<', variable, this.read_expr()];

        case tokens.T_SR_EQUAL :
          return ['set', '>>', variable, this.read_expr()];

        case tokens.T_INC:
           return ['set', '++', variable];

        case tokens.T_DEC:
           return ['set', '--', variable];

        default:
          // @fixme ugly error message
          this.expect([
            '=',
            tokens.T_PLUS_EQUAL,
            tokens.T_CONCAT_EQUAL,
            tokens.T_MINUS_EQUAL,
            tokens.T_MUL_EQUAL,
            tokens.T_POW_EQUAL,
            tokens.T_DIV_EQUAL,
            tokens.T_MOD_EQUAL,
            tokens.T_OR_EQUAL,
            tokens.T_AND_EQUAL,
            tokens.T_SL_EQUAL,
            tokens.T_SR_EQUAL ,
            tokens.T_INC,
            tokens.T_DEC
          ]);
      }
    }
    /**
     * <ebnf>
     *    new_expr ::= T_NEW
     * </ebnf>
     */
    ,read_new_expr: function() {
      // @todo
      this.expect(tokens.T_NEW).next();
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
    },
    /**
     * <ebnf>
     *   variable ::= (reference_variable | namespace_name) (T_DOUBLE_COLON reference_variable)?
     * </ebnf>
     * <code>
     *  $var                      // simple var
     *  var::CONST_NAME           // dynamic class name with const retrieval
     *  $var->func()->property    // chained calls
     * </code>
     */
    read_variable: function(read_only) {
      var result;

      // reads the entry point
      if (this.is([tokens.T_VARIABLE, '$'])) {
        result = this.read_reference_variable();
      } else if (this.is([tokens.T_NS_SEPARATOR, tokens.T_STRING])) {
        result = this.read_namespace_name();
        this.expect(tokens.T_DOUBLE_COLON);
      } else {
        this.expect('VARIABLE');
      }

      // static call
      if (this.token === tokens.T_DOUBLE_COLON) {
        var getter = null;
        if (this.is([tokens.T_VARIABLE, '$'])) {
          getter = this.read_reference_variable();
        } else if (this.token === tokens.T_STRING) {
          getter = this.text();
          this.next();
        } else {
          this.error([tokens.T_VARIABLE, tokens.T_STRING]);
        }
        if (this.token === '(') {
          var args = this.next().read_parameter_list();
          this.expect(')').next();
          result = ['static.call', result, getter, args ];
        } else {
          result = ['static.get', result, getter];
        }
      }

      // @todo
      // if (this.token === ) {
      // }

      return result;
    },
    /**
     * <ebnf>
     *  reference_variable ::=  (T_VARIABLE | '${' EXPR '}') ( '[' OFFSET ']' | '{' EXPR '}' )*
     * </ebnf>
     * <code>
     *  $foo[123];      // foo is an array ==> gets its entry
     *  $foo{1};        // foo is a string ==> get the 2nd char offset
     *  ${'foo'};       // get the dynamic var $foo
     *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
     * </code>
     */
    read_reference_variable: function() {
      var result;
      if (this.expect([tokens.T_VARIABLE, '$']).token === tokens.T_VARIABLE) {
        // plain variable name
        result = this.text();
        this.next();
      } else {
        // dynamic variable name
        this.next();
        if (this.expect(['{', '$']).token == '$') {
          result = this.next().read_reference_variable();
        } else {
          result = this.next().read_expr();
          this.expect('}').next();
        }
      }
      while(this.token != EOF) {
        if (this.token == '[') {
          result = ['offset', result, this.next().read_dim_offset()];
          this.expect(']').next();
        }
        if (this.token == '{') {
          result = ['offset', result, this.next().read_expr()];
          this.expect('}').next();
        }
      }
      return result;
    }
  };
};