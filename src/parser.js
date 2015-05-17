/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var fs = require('fs');

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

  /**
   * The basic parser api
   */
  var api = {
    // le lexer
    lexer: engine.lexer,
    token: null,
    debug: false,
    entries: {
      'SCALAR': [
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
        tokens.T_NS_C,
        '"',
        '-',
        tokens.T_NS_SEPARATOR
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
      ],
      'VARIABLE': [
        tokens.T_VARIABLE, 
        '$',
        tokens.T_NS_SEPARATOR, 
        tokens.T_STRING,
        tokens.T_STATIC
      ],
      'EXPR': [
        '@','-','+','!','~','(','`',
        tokens.T_LIST,
        tokens.T_CLONE,
        tokens.T_INC,
        tokens.T_DEC,
        tokens.T_NEW,
        tokens.T_ISSET,
        tokens.T_EMPTY,
        tokens.T_INCLUDE,
        tokens.T_INCLUDE_ONCE,
        tokens.T_REQUIRE,
        tokens.T_REQUIRE_ONCE,
        tokens.T_EVAL,
        tokens.T_INT_CAST,
        tokens.T_DOUBLE_CAST,
        tokens.T_STRING_CAST,
        tokens.T_ARRAY_CAST,
        tokens.T_OBJECT_CAST,
        tokens.T_BOOL_CAST,
        tokens.T_UNSET_CAST,
        tokens.T_EXIT,
        tokens.T_PRINT,
        tokens.T_YIELD,
        tokens.T_STATIC,
        tokens.T_FUNCTION,
        // using VARIABLES :
        tokens.T_VARIABLE, 
        '$',
        tokens.T_NS_SEPARATOR, 
        tokens.T_STRING,
        // using SCALAR :
        tokens.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
        tokens.T_CONSTANT_ENCAPSED_STRING,
        tokens.T_START_HEREDOC,
        tokens.T_LNUMBER,
        tokens.T_DNUMBER,
        tokens.T_ARRAY,'[',
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
      this.next();
      var ast = [];
      while(this.token != EOF) {
        ast.push(this.read_start());
      }
      return ['program', ast];
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
    ,showlog: function() {
      var stack = (new Error()).stack.split('\n');
      console.log(
        'Line ' 
        + this.lexer.yylloc.first_line
        + ' : '
        + getTokenName(this.token)
        + ' @' + stack[3].trim()
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
      if (this.debug) this.showlog();
      return this;
    }
    /**
     * Check if token is of specified type
     */
    ,is: function(type) {
      if (Array.isArray(type)) {
        return type.indexOf(this.token) !== -1;
      } else {
        return this.entries[type].indexOf(this.token) != -1;
      }
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
  };
  
  // extends the parser with syntax files
  fs.readdirSync(__dirname + '/parser').forEach(function(file) {
    if (file.indexOf('.js', file.length - 3) !== -1) {
      var ext = require(__dirname + '/parser/' + file)(api, tokens, EOF);
      for(var k in ext) {
        api[k] = ext[k];
      }
    }
  });
  
  return api;
};