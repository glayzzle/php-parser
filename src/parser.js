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
  return {
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
      ]
    }
    /** main entry point : converts a source code to AST **/
    ,parse: function(code) {
      this.lexer.setInput(code);
      this.token = this.lexer.lex() || EOF;
      var ast = [];
      while(this.token != EOF) {
        ast.push(this.read_start(this.token));
      }
      return ast;
    }
    /** handling errors **/
    ,error: function(token, expect) {
      token = getTokenName(token);
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
    /** force to expect specified token **/
    ,expect: function(token) {
      if (this.token != token) {
        this.error(this.token, token);
      }
      return true;
    }
    /** consume the next token **/
    ,next: function(token) {
      this.token = this.lexer.lex() || this.error(EOF);
      if (token ) this.expect(token);
      return this.token;
    }
    /**
     * Check if token is of specified type
     */
    ,is: function(token, type) {
      if (!type) {
        type = token;
        token = this.token;
      }
      return this.entries[type].indexOf(token) != -1;
    }
    /** convert an token to ast **/
    ,read_token: function(token) {
      if (isNumber(token)) {
        var result = [token, this.lexer.yytext, this.lexer.yylloc.first_line];
        this.next();
        return result;
      } else {
        this.next();
        return token;
      }
    }
    /**
     * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
     * <ebnf>
     * list ::= separator? ( item separator )* item
     * </ebnf>
     */
    , read_list: function(token, item, separator) {
        var result = [];
        if (token == separator)
            token = this.next();           // trim separator

        if (typeof (item) === "function") {
            while (this.token != EOF) {
                result.push(item.apply(this, [token]));
                if (this.token != separator) break;
                this.next();
            }
        } else {
            if (token != item) {
                this.error(token, [item, separator]);
            }
            result.push(this.lexer.yytext);
            this.token = this.lexer.lex() || EOF;
            while (this.token != EOF) {
                if (this.token != separator)
                    break;
                this.token = this.lexer.lex() || EOF;     // trim separator
                if (this.token != item)
                    break;
                result.push(this.lexer.yytext);
                this.token = this.lexer.lex() || EOF;
            }
        }
        return result;
    }
    /**
     * <ebnf>
     * start ::= (namespace | top_statement)*
     * </ebnf>
     */
    ,read_start: function(token) {
      if (token == tokens.T_NAMESPACE) {
        return this.read_namespace(token);
      } else {
        return this.read_top_statement(token);
      }
    }
    /**
     * <ebnf>
     * namespace ::= T_NAMESPACE namespace_name? '{' top_statements '}' | T_NAMESPACE namespace_name ';' top_statements
     * </ebnf>
     */
    ,read_namespace: function(token) {
      if (token != tokens.T_NAMESPACE) this.error(token, tokens.T_NAMESPACE);
      token = this.next();
      if (token == '{') {
        return [
            'namespace'
            , []
            , this.read_code_block(token, true)
        ];
      } else {
        if(this.token === tokens.T_NS_SEPARATOR)
            this.error(this.token, ['{', tokens.T_STRING]);

        var name = this.read_namespace_name(token);
        if (this.token == ';') {
          var body = this.read_top_statements(this.next());
          if (this.token != EOF) this.error(this.token, EOF);
          return ['namespace', name, body];
        } else if (this.token == '{') {
          return ['namespace', name, this.read_code_block(this.token, true)];
        } else {
          this.error(this.token, ['{', ';']);
        }
      }
    }
    /**
     * reading a namespace name
     * <ebnf>
     *  namespace_name ::= T_NS_SEPARATOR? (T_STRING T_NS_SEPARATOR)* T_STRING
     * </ebnf>
     */
    ,read_namespace_name: function(token) {
      return this.read_list(token, tokens.T_STRING, tokens.T_NS_SEPARATOR);
    }
    /**
     * reading a list of top statements (helper for top_statement*)
     * <ebnf>
     *  top_statements ::= top_statement*
     * </ebnf>
     */
    ,read_top_statements: function(token) {
      var result = [];
      if (token) this.token = token;
      while(this.token !== EOF && this.token !== '}') {
        result.push(this.read_top_statement(this.token));
        this.token = this.lexer.lex() || EOF;
      }
      return result;
    }
    /**
     * reading a top statement
     * <ebnf>
     *  top_statement ::= function | class | interface | trait | inner_statement
     * </ebnf>
     */
    ,read_top_statement: function(token) {
      if (token == tokens.T_FUNCTION ) {
        return this.read_function(token);
      } else if (token == tokens.T_FINAL || token == tokens.T_ABSTRACT) {
        var flag = this.read_class_scope(token);
        token = this.read();
        if ( token == tokens.T_CLASS) {
          return this.read_class(token, flag);
        } else if ( token == tokens.T_INTERFACE, flag ) {
          return this.read_interface(token);
        } else if ( token == tokens.T_TRAIT, flag ) {
          return this.read_trait(token);
        } else {
          this.error(this.token, [tokens.T_CLASS, tokens.T_INTERFACE, tokens.T_TRAIT]);
        }
      } else if ( token == tokens.T_CLASS) {
        return this.read_class(token);
      } else if ( token == tokens.T_INTERFACE ) {
        return this.read_interface(token);
      } else if ( token == tokens.T_TRAIT ) {
        return this.read_trait(token);
      } else if( token == tokens.T_USE ) {
        return this.read_use_statements(token);
      } else {
        return this.read_inner_statement(token);
      }
    }
    /**
     * <ebnf>
     * use_statements ::=
     *      use_statements ',' use_statement
     *      | use_statement
     * </ebnf>
     */
    ,read_use_statements: function(token) {
        var result = [];
        if (token) this.token = token;
        while(this.token !== EOF) {
            if (token != tokens.T_USE) this.error(token, tokens.T_USE);
            result.push(this.read_list(this.next(), this.read_use_statement, ','));
            if(this.token !== tokens.T_USE) break;
            this.token = this.lexer.lex() || EOF;
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
    ,read_use_statement: function(token) {
        var result = null;
        if(
            this.token === tokens.T_FUNCTION
            || this.token === tokens.T_CONST
        ) {
            this.next();
        }
        var name = this.read_namespace_name(this.token);
        if(this.token === tokens.T_AS) {
            this.next();
            if(this.token !== tokens.T_STRING)
                this.error(this.token, tokens.T_STRING);
            result = ['use', name, this.lexer.yytext];
            this.next();
        } else {
            result = ['use', name, name[name.length - 1]];
        }
        this.expect(';') && this.next();
        return result;
	}
    /**
     * reads a list of simple inner statements (helper for inner_statement*)
     * <ebnf>
     *  inner_statements ::= inner_statement*
     * </ebnf>
     */
    ,read_inner_statements: function(token) {
      var result = [];
      if (token) this.token = token;
      while(this.token != EOF && this.token !== '}') {
        result.push(this.read_inner_statement(this.token));
        this.token = this.lexer.lex() || EOF;
      }
      return result;
    }
    /**
     * reads a simple inner statement
     * <ebnf>
     *  inner_statement ::= '{' inner_statements '}' | token
     * </ebnf>
     */
    ,read_inner_statement: function(token) {
      switch(token) {
        case '{':
          return this.read_code_block(token, false);
        case tokens.T_IF:
          return this.read_if(token);
        default:
          return this.read_token(token);
      }
    }
    /**
     * <ebnf>
     *  if ::=
     * </ebnf>
     */
    ,read_if: function(token) {
    }
    /**
     * <ebnf>
     *  code_block ::= '{' (inner_statements | top_statements) '}'
     * </ebnf>
     */
    ,read_code_block: function(token, top) {
      if (token == '{') {
        var body = top ?
          this.read_inner_statements(token)
          : this.read_top_statements(token)
        ;
        this.expect('}') && this.next();
        return body;
      } else {
        this.expect('{');
      }
    }
    /**
     * checks if current token is a reference keyword
     */
    ,is_reference: function(token) {
      return (token == '&');
    }
    /**
     * reading a function
     * <ebnf>
     * function ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')' code_block
     * </ebnf>
     */
    ,read_function: function(token) {
      if (token != tokens.T_FUNCTION) this.error(token, tokens.T_FUNCTION);
      var isRef = this.is_reference(this.next());
      if (isRef) this.next();
      if (this.token != tokens.T_STRING) this.error(this.token, tokens.T_STRING);
      var name = this.lexer.yytext;
      if (this.next() != '(') this.error(this.token, '(');
      var params = this.read_parameter_list(this.next());
      if (this.token != ')') this.error(this.token, ')');
      if (this.next() != '{') this.error(this.token, '{');
      var body = this.read_code_block(this.token, false);
      return ['function', name, params, body, isRef];
    }
    /**
     * reads a list of parameters
     * <ebnf>
     *  parameter_list ::= (parameter ',')* parameter?
     * </ebnf>
     */
    ,read_parameter_list: function(token) {
      var result = [];
      if (this.token != ')') {
        while(this.token != EOF) {
          result.push(this.read_parameter(this.token));
          if (this.token == ',') {
            this.token = this.lexer.lex() || EOF;
          } else if (this.token == ')') {
            break;
          } else {
            this.error(this.token, [',', ')']);
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
    ,read_parameter: function(token) {
      var type = this.read_type(token);
      var isRef = this.is_reference(this.token);
      if (isRef) this.next();
      if (this.token != tokens.T_VARIABLE) this.error(this.token, tokens.T_VARIABLE);
      var name = this.lexer.yytext;
      var value = [];
      if (this.next() == '=') {
        value = this.read_scalar(this.next());
      }
      return [name, type, value, isRef];
    }
    /**
     * read type hinting
     * <ebnf>
     *  type ::= T_ARRAY | namespace_name
     * </ebnf>
     */
    ,read_type: function(token) {
      switch(token) {
        case tokens.T_ARRAY:
          this.next();
          return 'array';
        case tokens.T_NS_SEPARATOR:
        case tokens.T_STRING:
          return this.read_namespace_name(token);
        default:
          return 'mixed';
      }
    }
    /**
     * @todo reading a scalar value
     */
    ,read_scalar: function( token ) {
      if (this.is(token, 'T_MAGIC_CONST')) {
        return this.get_magic_constant(token);
      } else {
        switch(token) {
          // texts
          case tokens.T_CONSTANT_ENCAPSED_STRING:
            var value = this.lexer.yytext;
            this.next();
            return ['string', value];
          case tokens.T_START_HEREDOC:
            token = this.next();
            var value = '';
            if (token == tokens.T_ENCAPSED_AND_WHITESPACE) {
              value = this.lexer.yytext;
              token = this.next();
            }
            if (token != tokens.T_END_HEREDOC) {
              this.error(token, tokens.T_END_HEREDOC);
            } else this.next();
            return ['string', value];
          // NUMERIC
          case tokens.T_LNUMBER:  // long
          case tokens.T_DNUMBER:  // double
            var value = this.lexer.yytext;
            this.next();
            return ['number', value];
          case tokens.T_STRING:  // CONSTANTS
            var value = this.lexer.yytext;
            if ( this.next() == tokens.T_DOUBLE_COLON) {
              // class constant
              if (this.next() != tokens.T_STRING ) {
                this.error(this.token, tokens.T_STRING);
              } else {
                value = [value, this.lexer.yytext];
              }
              this.next();
            }
            return ['const', value];
          case tokens.T_ARRAY:  // array parser
          case '[':             // short array format
            return this.read_array(token, false);
          default:
            this.error(token, 'T_SCALAR');
        }
      }
    }
    /**
     * Parse an array
     */
    ,read_array: function(token, vars) {
      var expect = null;
      var items = [];
      if (token == tokens.T_ARRAY) {
        token = this.next();
        if (token != '(') {
          this.error(token, '(');
        }
        expect = ')';
      } else if (token == '[') {
        expect = ']';
      } else {
        this.error(token, [tokens.T_ARRAY, '[']);
      }
      if (this.next() != expect) {
        while(this.token != EOF) {
          var entry = this.read_scalar(this.token);
          if (this.token == tokens.T_DOUBLE_ARROW) {
            items.push([entry, this.read_scalar(this.next())]);
          } else {
            items.push([null, entry]);
          }
          if (this.token == ',') {
            this.next();
          } else break;
        }
      }
      if (this.token != expect) this.error(this.token, expect);
      this.next();
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
    ,read_class: function(token, flag) {
      this.expect(tokens.T_CLASS);
      this.next(tokens.T_STRING);
      var propName = this.lexer.yytext;

      this.next();
      var propExtends = false, propImplements = false;
      if (this.token == tokens.T_EXTENDS) {
        propExtends = this.read_namespace_name( this.next() );
      }
      if (this.token == tokens.T_IMPLEMENTS) {
        propImplements = this.read_namespace_name( this.next() );
      }
      if ( this.token != '{') this.error(this.token, '{');
      var body = this.read_class_body();
      if ( this.token != '}') this.error(this.token, '}');
      this.next();
      return ['class', propName, flag, propExtends, propImplements, body];
    }
    /**
     * Read the class visibility
     * <ebnf>
     *   class_scope ::= (T_FINAL | T_ABSTRACT)?
     * </ebnf>
     */
    ,read_class_scope: function(token) {
      if (token == tokens.T_FINAL || token == tokens.T_ABSTRACT) {
        this.next();
        return token;
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
        result.push(this.read_top_statement(this.token));
        this.token = this.lexer.lex() || EOF;
      }
      return result;
    }
    /**
     *
     */
    ,read_member_flags: function(token) {

    }
    /**
     * reading an interface
     * <ebnf>
     * interface ::= class_scope? T_INTERFACE '@todo'
     * </ebnf>
     */
    ,read_interface: function(token, flag) {
      this.expect(tokens.T_INTERFACE);
      return ['interface', flag];
    }
    /**
     * reading a trait
     * <ebnf>
     * trait ::= class_scope? T_TRAIT '@todo'
     * </ebnf>
     */
    ,read_trait: function(token, flag) {
      this.expect(tokens.T_TRAIT);
      return ['trait', flag];
    }
  };
};