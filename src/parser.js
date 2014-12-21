/**
 * Glayzzle : the PHP engine on NodeJS
 *
 * Copyright (C) 2014 Glayzzle
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @url http://glayzzle.com
 * @license GNU-2
 */

/**
 * Expose the parser constructor
 */
module.exports = function(engine) {

  var tokens = engine.tokens.names;
  var names = engine.tokens.values;
  var EOF = engine.lexer.EOF;

  // check if argument is a number
  function isNumber(n) {
    return n != '.' && n != ',' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  // private helper : gets a token name
  function getTokenName(token) {
    if (!isNumber(token)) {
      return "'" + token + "'";
    } else {
      if (token == 1) return 'the end of file (EOF)';
      return names[token];
    }
  }

  // parser api
  var api = null;
  return api = {
    // le lexer
    lexer: engine.lexer,
    token: null,
    entries: {
      'T_SCALAR': [
          tokens.T_CONSTANT_ENCAPSED_STRING,
          tokens.T_START_HEREDOC,
          tokens.T_LNUMBER,
          tokens.T_DNUMBER,
          tokens.T_STRING,
          tokens.T_ARRAY,'[',
          tokens.T_CLASS_C,
          tokens.T_TRAIT_C,
          tokens.T_FUNC_C,
          tokens.T_METHOD_C,
          tokens.T_LINE,
          tokens.T_FILE,
          tokens.T_DIR,
          tokens.T_NS_C
      ],
      'T_MAGIC_CONST': [
          tokens.T_CLASS_C,
          tokens.T_TRAIT_C,
          tokens.T_FUNC_C,
          tokens.T_METHOD_C,
          tokens.T_LINE,
          tokens.T_FILE,
          tokens.T_DIR,
          tokens.T_NS_C
      ],
      'T_MEMBER_FLAGS': [
        tokens.T_PUBLIC,
        tokens.T_PRIVATE,
        tokens.T_PROTECTED,
        tokens.T_STATIC,
        tokens.T_ABSTRACT,
        tokens.T_FINAL
      ]
    }
    /** main entry point : converts a source code to AST **/
    ,parse: function(code) {
      this.lexer.setInput(code);
      this.token = this.lexer.lex() || EOF;
      var ast = [];
      while(this.token != EOF) {
        ast.push(this.read_start());
      }
      return ast;
    }
    /** handling errors **/
    ,error: function(expect) {
      token = getTokenName(this.token);
      var msgExpect = '';
      if (expect) {
        msgExpect = ', expecting ';
        if (Array.isArray(expect)) {
          for(var i = 0; i < expect.length; i++) {
            expect[i] = getTokenName(expect[i]);
          }
          msgExpect += expect.join(', ');
        } else {
          msgExpect += getTokenName(expect);
        }
      }
      throw new Error(
        'Parse Error : unexpected ' + token + msgExpect,
        '\nat line ' + this.lexer.yylloc.first_line
      );
    }
    /** outputs some debug information on current token **/
    ,debug: function() {
      console.log(
        'Line ' 
        + this.lexer.yylloc.first_line
        + ' : '
        + getTokenName(this.token)
      );
      return this;
    }
    /** force to expect specified token **/
    ,expect: function(token) {
      if (Array.isArray(token)) {
        if (token.indexOf(this.token) === -1) {
          this.error(token);
        }
      } else if (this.token != token) {
        this.error(token);
      }
      return this;
    }
    /**returns the current token contents **/
    ,text: function() {
      return this.lexer.yytext;
    }
    /** consume the next token **/
    ,next: function() {
      this.token = this.lexer.lex() || EOF;
      return this;
    }
    /**
     * Check if token is of specified type
     */
    ,is: function(type) {
      return this.entries[type].indexOf(this.token) != -1;
    }
    /** convert an token to ast **/
    ,read_token: function() {
      var result = this.token;
      if (isNumber(result)) {
        result = [result, this.text(), this.lexer.yylloc.first_line];
      }
      this.next();
      return result;
    }
    /**
     * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
     * <ebnf>
     * list ::= separator? ( item separator )* item
     * </ebnf>
     */
    ,read_list: function(item, separator) {
      var result = [];

      // trim first separator (@fixme not sure ?)
      if (this.token == separator) this.next();

      if (typeof (item) === "function") {
        do {
          result.push(item.apply(this, []));
          if (this.token != separator) {
            break;
          }
        } while(this.next().token != EOF);
      } else {
        result.push(this.expect(item).text());
        while (this.next().token != EOF) {
          if (this.token != separator) break;
          // trim current separator & check item
          if (this.next().token != item) break;
          result.push(this.text());
        }
      }
      return result;
    }
    /**
     * <ebnf>
     * start ::= (namespace | top_statement)*
     * </ebnf>
     */
    ,read_start: function() {
      if (this.token == tokens.T_NAMESPACE) {
        return this.read_namespace();
      } else {
        return this.read_top_statement();
      }
    }
    /**
     * <ebnf>
     * namespace ::= T_NAMESPACE namespace_name? '{' 
     *    top_statements 
     * '}' 
     * | T_NAMESPACE namespace_name ';' top_statements
     * </ebnf>
     */
    ,read_namespace: function() {
      this.expect(tokens.T_NAMESPACE).next();
      if (this.token == '{') {
        return [
            'namespace'
            , []
            , this.read_code_block(true)
        ];
      } else {
        // @fixme should expect {, T_STRING even if not NS_SEP
        if(this.token === tokens.T_NS_SEPARATOR)
            this.error(['{', tokens.T_STRING]);
        var name = this.read_namespace_name();
        if (this.token == ';') {
          var body = this.next().read_top_statements();
          this.expect(EOF);
          return ['namespace', name, body];
        } else if (this.token == '{') {
          return ['namespace', name, this.read_code_block(true)];
        } else {
          this.error(['{', ';']);
        }
      }
    }
    /**
     * reading a namespace name
     * <ebnf>
     *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
     * </ebnf>
     */
    ,read_namespace_name: function() {
      return this.read_list(tokens.T_STRING, tokens.T_NS_SEPARATOR);
    }
    /**
     * reading a list of top statements (helper for top_statement*)
     * <ebnf>
     *  top_statements ::= top_statement*
     * </ebnf>
     */
    ,read_top_statements: function() {
      var result = [];
      while(this.token !== EOF && this.token !== '}') {
        result.push(this.read_top_statement());
      }
      return result;
    }
    /**
     * reading a top statement
     * <ebnf>
     *  top_statement ::= function | class | interface | trait | inner_statement
     * </ebnf>
     */
    ,read_top_statement: function() {
      if (this.token == tokens.T_FUNCTION ) {
        return this.read_function();
      } else if (this.token == tokens.T_FINAL || this.token == tokens.T_ABSTRACT) {
        var flag = this.read_class_scope();
        if ( this.token == tokens.T_CLASS) {
          return this.read_class(flag);
        } else if ( this.token == tokens.T_INTERFACE ) {
          return this.read_interface(flag);
        } else if ( this.token == tokens.T_TRAIT ) {
          return this.read_trait(flag);
        } else {
          this.error([tokens.T_CLASS, tokens.T_INTERFACE, tokens.T_TRAIT]);
        }
      } else if ( this.token == tokens.T_CLASS) {
        return this.read_class(0);
      } else if ( this.token == tokens.T_INTERFACE ) {
        return this.read_interface(0);
      } else if ( this.token == tokens.T_TRAIT ) {
        return this.read_trait(0);
      } else if( this.token == tokens.T_USE ) {
        return this.read_use_statements();
      } else {
        return this.read_inner_statement();
      }
    }
    /**
     * <ebnf>
     * use_statements ::=
     *      use_statements ',' use_statement
     *      | use_statement
     * </ebnf>
     */
    ,read_use_statements: function() {
        var result = [];
        while(this.token !== EOF) {
            this.expect(tokens.T_USE).next();
            result.push(this.read_list(this.read_use_statement, ','));
            if(this.token !== tokens.T_USE) break;
        }
        return result;
    }
    /**
     * <ebnf>
     * use_statement ::= (
     *  (T_FUNCTION | T_CONST)? namespace_name
     *  | (T_FUNCTION | T_CONST)? namespace_name T_AS T_STRING
     *  ) ';'
     * </ebnf>
     */
    ,read_use_statement: function() {
        var result = null;
        if(
          this.token === tokens.T_FUNCTION
          || this.token === tokens.T_CONST
        ) {
          // @todo should preserve this information ?
          this.next();
        }
        var name = this.read_namespace_name();
        if(this.token === tokens.T_AS) {
          this.next().expect(tokens.T_STRING);
          result = ['use', name, this.text()];
          this.next();
        } else {
          result = ['use', name, name[name.length - 1]];
        }
        return result;
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
     * reads a simple inner statement
     * <ebnf>
     *  inner_statement ::= '{' inner_statements '}' | token
     * </ebnf>
     */
    ,read_inner_statement: function() {
      switch(this.token) {
        case '{':
          return this.read_code_block(false);
        case tokens.T_IF:
          return this.read_if();
        default:
          return this.read_token();
      }
    }
    /**
     * <ebnf>
     *  if ::=
     * </ebnf>
     */
    ,read_if: function() {
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
    /**
     * checks if current token is a reference keyword
     */
    ,is_reference: function() {
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
    ,read_function: function() {
      var result = this.read_function_declaration();
      result.push(this.expect('{').read_code_block(false));
      return result;
    }
    /**
     * reads a function declaration (without his body)
     * <ebnf>
     * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
     * </ebnf>
     */
    ,read_function_declaration: function() {
      this.expect(tokens.T_FUNCTION);
      var isRef = this.next().is_reference();
      var name = this.expect(tokens.T_STRING).text();
      this.next().expect('(').next();
      var params = this.read_parameter_list();
      this.expect(')').next();
      return ['function', name, params, isRef];
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
    /**
     * @todo reading a scalar value
     */
    ,read_scalar: function() {
      if (this.is('T_MAGIC_CONST')) {
        return this.get_magic_constant();
      } else {
        switch(this.token) {
          // texts
          case tokens.T_CONSTANT_ENCAPSED_STRING:
            var value = this.text();
            this.next();
            return ['string', value];
          case tokens.T_START_HEREDOC:
            var value = '';
            if (this.next().token == tokens.T_ENCAPSED_AND_WHITESPACE) {
              value = this.text();
              this.next();
            }
            this.expect(tokens.T_END_HEREDOC).next();
            return ['string', value];
          // NUMERIC
          case tokens.T_LNUMBER:  // long
          case tokens.T_DNUMBER:  // double
            var value = this.text();
            this.next();
            return ['number', value];
          case tokens.T_STRING:  // CONSTANTS
            var value = this.text();
            if ( this.next().token == tokens.T_DOUBLE_COLON) {
              // class constant
              this.next().expect(tokens.T_STRING);
              value = [value, this.text()];
              this.next();
            }
            return ['const', value];
          case tokens.T_ARRAY:  // array parser
          case '[':             // short array format
            return this.read_array(false);
          default:
            this.error('T_SCALAR');
        }
      }
    }
    /**
     * Parse an array
     */
    ,read_array: function(vars) {
      var expect = null;
      var items = [];
      
      if (this.expect([tokens.T_ARRAY, '[']).token == tokens.T_ARRAY) {
        this.next().expect('(');
        expect = ')';
      } else {
        expect = ']';
      }
      if (this.next().token != expect) {
        while(this.token != EOF) {
          var entry = this.read_scalar();
          if (this.token == tokens.T_DOUBLE_ARROW) {
            items.push([entry, this.next().read_scalar()]);
          } else {
            items.push([null, entry]);
          }
          if (this.token == ',') {
            this.next();
          } else break;
        }
      }
      this.expect(expect).next();
      return ['array', items];
    }
    /**
     * Converts the constant token to it's scallar value
     */
    ,get_magic_constant: function(token) {
      return ['string', '@todo'];
    }
    /**
     * reading a class
     * <ebnf>
     * class ::= class_scope? T_CLASS T_STRING (T_EXTENDS NAMESPACE_NAME)? (T_IMPLEMENTS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' CLASS_BODY '}'
     * </ebnf>
     */
    ,read_class: function(flag) {
      this.expect(tokens.T_CLASS)
        .next()
        .expect(tokens.T_STRING)
      ;
      var propName = this.text()
        , propExtends = false
        , propImplements = false
      ;
      if (this.next().token == tokens.T_EXTENDS) {
        propExtends = this.next().read_namespace_name();
      }
      if (this.token == tokens.T_IMPLEMENTS) {
        propImplements = this.next().read_list(
          this.read_namespace_name,
          ','
        );
      }
      return [
        'class'
        ,propName
        ,flag
        ,propExtends
        ,propImplements
        ,this.expect('{').next().read_class_body()
      ];
    }
    /**
     * Read the class visibility
     * <ebnf>
     *   class_scope ::= (T_FINAL | T_ABSTRACT)?
     * </ebnf>
     */
    ,read_class_scope: function() {
      var result = this.token;
      if (result == tokens.T_FINAL || result == tokens.T_ABSTRACT) {
        this.next();
        return result;
      }
      return 0;
    }
    /**
     * Reads a class body
     * <ebnf>
     *   class_body ::= (member_flags? (T_VAR | T_STRING | T_FUNCTION))*
     * </ebnf>
     */
    ,read_class_body: function() {
      var result = {
        'constants': []
        ,'properties': []
        ,'methods': []
      };
      while(this.token !== EOF && this.token !== '}') {

        // check constant
        if (this.token == tokens.T_CONST) {
          result.constants.push(this.read_constant_list());
          this.expect(';').next();
          continue;
        }

        // read member flags
        var flags = this.read_member_flags(false);

        // jump over T_VAR then land on T_VARIABLE
        if (this.token === tokens.T_VAR) {
          this.next().expect(tokens.T_VARIABLE);
        }

        // reads a variable
        if (this.token === tokens.T_VARIABLE) {
          var variables = this.read_variable_list();
          this.expect(';').next();
          result.properties.push([flags].concat(variables));
        } else if (this.token === tokens.T_FUNCTION) {
          // reads a function
          result.methods.push([flags].concat(this.read_function()));
        } else {
          // raise an error
          this.error([
            tokens.T_CONST, 
            tokens.T_VARIABLE, 
            tokens.T_FUNCTION
          ]);
        }
      }
      this.expect('}').next();
      return result;
    }
    /**
     * Reads variable list
     * <ebnf>
     *  variable_list ::= (variable_declaration ',')* variable_declaration
     * </ebnf>
     */
    ,read_variable_list: function() {
      return this.read_list(
        this.read_variable_declaration,
        ','
      );
    }
    /**
     * Reads a variable declaration
     * <ebnf>
     *  variable_declaration ::= T_VARIABLE '=' scalar
     * </ebnf>
     */
    ,read_variable_declaration: function() {
      var varName = this.text();
      this.expect(tokens.T_VARIABLE).next().expect([',', ';', '=']);
      if (this.token === ';' || this.token === ',') {
        return [varName, null];
      }
      if(this.token === '=') {
        return [varName, this.next().read_scalar()];
      }
    }
    /**
     * Reads constant list
     * <ebnf>
     *  constant_list ::= T_CONST (constant_declaration ',')* constant_declaration
     * </ebnf>
     */
    ,read_constant_list: function() {
      return this.expect(tokens.T_CONST)
        .next()
        .read_list(
          this.read_constant_declaration, ','
        )
      ;
    }
    /**
     * Reads a constant declaration
     * <ebnf>
     *  constant_declaration ::= T_STRING '=' scalar
     * </ebnf>
     */
    ,read_constant_declaration: function() {
      var name = this.text();
      var value = this.expect(tokens.T_STRING)
        .next()
        .expect('=')
        .next()
        .read_scalar()
      ;
      return [name, value];
    }
    /**
     * Read member flags
     * @return array
     *  1st index : 0 => public, 1 => protected, 2 => private
     *  2nd index : 0 => instance member, 1 => static member
     *  3rd index : 0 => normal, 1 => abstract member, 2 => final member
     */
    ,read_member_flags: function(asInterface) {
      var result = [-1, -1, -1];
      if (this.is('T_MEMBER_FLAGS')) {
        var idx = 0, val = 0;
        do {
          
          switch(this.token) {
            case tokens.T_PUBLIC:     idx = 0; val = 0; break;
            case tokens.T_PROTECTED:  idx = 0; val = 1; break;
            case tokens.T_PRIVATE:    idx = 0; val = 2; break;
            case tokens.T_STATIC:     idx = 1; val = 1; break;
            case tokens.T_ABSTRACT:   idx = 2; val = 1; break;
            case tokens.T_FINAL:      idx = 2; val = 2; break;
          }
          if (asInterface) {
            if (idx == 0 && val == 2) {
              this.expect([tokens.T_PUBLIC, tokens.T_PROTECTED]);
            } else if (idx == 2 && val == 1) {
              this.error();
            }
          }
          if (result[idx] != -1) this.error();
          result[idx] = val;
        } while(this.next().is('T_MEMBER_FLAGS'));
      }

      if (result[0] == -1) result[0] = 0;
      if (result[1] == -1) result[1] = 0;
      if (result[2] == -1) result[2] = 0;
      return result;
    }
    /**
     * reading an interface
     * <ebnf>
     * interface ::= class_scope? T_INTERFACE T_STRING (T_EXTENDS (NAMESPACE_NAME ',')* NAMESPACE_NAME)? '{' INTERFACE_BODY '}'
     * </ebnf>
     */
    ,read_interface: function(flag) {
      var name = this.expect(tokens.T_INTERFACE)
        .next()
        .expect(tokens.T_STRING)
        .text()
      ;
      var propExtends = false;
      if (this.next().token == tokens.T_EXTENDS) {
        propExtends =  this.next().read_list(
          this.read_namespace_name,
          ','
        );
      }
      return [
        'interface'
        , name
        , flag
        , propExtends
        , this.expect('{').next().read_interface_body()
      ];
    }
    /**
     * Reads an interface body
     * <ebnf>
     *   interface_body ::= (member_flags? (T_CONST | T_FUNCTION))*
     * </ebnf>
     */
    ,read_interface_body: function() {
      var result = {
        'constants': []
        ,'methods': []
      };
      while(this.token !== EOF && this.token !== '}') {
        // check constant
        if (this.token == tokens.T_CONST) {
          result.constants.push(this.read_constant_list());
          this.expect(';').next();
          continue;
        }
        // read member flags
        var flags = this.read_member_flags(true);

        // reads a function
        if (this.token === tokens.T_FUNCTION) {
          result.methods.push([flags].concat(this.read_function_declaration()));
          this.expect(';').next();
        } else {
          // raise an error
          this.error([
            tokens.T_CONST,
            tokens.T_FUNCTION
          ]);
        }
      }
      this.expect('}').next();
      return result;
    }
    /**
     * reading a trait
     * <ebnf>
     * trait ::= class_scope? T_TRAIT '@todo'
     * </ebnf>
     */
    ,read_trait: function(flag) {
      this.expect(tokens.T_TRAIT);

      return ['trait', flag];
    }
  };
};