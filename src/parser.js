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
   * Graceful decorator
   */
  var _gracefulDecorator = function(fn) {
    try {
      this._currentNode = this._gracefulProxy[fn].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
      return this._currentNode;
    } catch(e) {
      if (this.lastError) {
        this.next(); // ignore token & go next
        var errorNode = [
          'error',
          this.lastError.tokenName,
          this.lastError.expected,
          this.lastError.line
        ];
        // force to append the error node
        if (this.ast.length < 3) {
          this.ast.push([]);
        }
        this.ast[2].push(errorNode);
        // return the node
        return errorNode;
      } else {
        throw e;  // not a parsing error
      }
    }
  };

  /**
   * The basic parser api
   */
  var api = {
    // Private vars, do not use directly
    _gracefulProxy: {},
    _graceful: false,
    // the lexer
    lexer: engine.lexer,
    token: null,
    prev: null,
    debug: false,
    locations: false,
    extractDoc: false,
    suppressErrors: false,
    lastError: false,
    startAt: [],
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
      'EOS': [
        ';', 
        tokens.T_CLOSE_TAG, 
        EOF, 
        tokens.T_INLINE_HTML
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
      this.lastError = false;
      this.lexer.setInput(code);
      this.lexer.comment_tokens = this.extractDoc;
      this.length = this.lexer._input.length;
      this.nextWithComments();
      this.ast = ['program', []];
      while(this.token != EOF) {
        var node = this.read_start();
        if (node !== null) {
          if (typeof node[0] !== 'string') {
            node.forEach(function(item) {
              this.ast[1].push(item);
            }.bind(this));
          } else {
            this.ast[1].push(node);
          }
        }
      }
      return this.ast;
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
      this.lastError = {
        token: this.token,
        tokenName: token,
        expected: expect,
        messageExpected: msgExpect,
        message: 'Parse Error : unexpected ' + token + msgExpect + ' at line ' + this.lexer.yylloc.first_line,
        line: this.lexer.yylloc.first_line
      };
      if (this.suppressErrors && !this._gracefull) {
        this.token = EOF;
      } else {
        throw new Error(this.lastError.message);
      }
    }
    /**
     * enable / disable the graceful mode
     */
    ,graceful: function(mode) {
      if (this._graceful !== mode) {
        if (mode) {
          // enable the graceful mode
          this._gracefulProxy = {};
          for(var i in this) {
            var cb = this[i];
            if (typeof cb === 'function') {
              this._gracefulProxy[i] = cb;
              this[i] = _gracefulDecorator.bind(this, i);
            }
          }
        } else {
          // disable the graceful mode
          for(var i in this._gracefulProxy) {
            this[i] = this._gracefulProxy[i];
          }
        }
        this._graceful = mode;
      }
      return this;
    
    }
    /**
     * Creates a new AST node
     */
    ,node: function(name) {
      var startAt = null;
      if (this.locations === true) { 
        startAt = [
          this.lexer.yylloc.first_line, 
          this.lexer.yylloc.first_column,
          this.length - this.lexer._input.length - this.lexer.yytext.length
        ];
      }
      return function() {
        var result =  Array.prototype.slice.call(arguments);
        if (name && name.constructor === Array) {
          if (this.locations === true) {
            name[2] = [
              this.prev[0], 
              this.prev[1],
              this.prev[2]
            ];
            Array.prototype.push.apply(name[3], result);
          } else {
            Array.prototype.push.apply(name, result);
          }
          result = name;
        } else {
          if (name) {
            result.unshift(name);
          }
          if (this.locations === true) {
            result = [
              'position', 
              startAt,
              [
                this.prev[0], 
                this.prev[1],
                this.prev[2]
              ],
              result
            ];
          }
        }
        return result;
      }.bind(this);
    }
    /** expects an end of statement or end of file **/
    ,expectEndOfStatement: function() {
      if (this.token === ';') {
        this.nextWithComments();
        if (this.token === tokens.T_CLOSE_TAG) {
          // strip close tag (statement already closed with ';')
          this.nextWithComments();
        }
      } else if (this.token === tokens.T_CLOSE_TAG) {
        this.nextWithComments();
      } else if (this.token !== tokens.T_INLINE_HTML && this.token !== EOF) {
        this.error(';');
      }
      return this;
    }
    /** outputs some debug information on current token **/
    ,showlog: function() {
      var stack = (new Error()).stack.split('\n');
      console.log(
        'Line ' 
        + this.lexer.yylloc.first_line
        + ' : '
        + getTokenName(this.token)
        + ">" + this.lexer.yytext + "<"
        + ' @' + stack[3].trim()
      );
      return this;
    }
    /** force to expect specified token **/
    ,expect: function(token) {
      if (!this.lastError) {
        if (Array.isArray(token)) {
          if (token.indexOf(this.token) === -1) {
            this.error(token);
          }
        } else if (this.token != token) {
          this.error(token);
        }
      }
      return this;
    }
    /**returns the current token contents **/
    ,text: function() {
      return this.lexer.yytext;
    }
    /** consume the next token **/
    ,next: function() {
      this.nextWithComments();
      if (this.debug) this.showlog();
      while(this.token === tokens.T_COMMENT || this.token === tokens.T_DOC_COMMENT) {
        // IGNORE COMMENTS
        this.nextWithComments();
      }
      return this;
    }
    /** consume the next token (including doc) **/
    ,nextWithComments: function() {
      this.prev = [
        this.lexer.yylloc.first_line, 
        this.lexer.yylloc.first_column, 
        this.lexer.offset
      ];
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
    ,read_list: function(item, separator, preserveFirstSeparator) {
      var result = [];

      if (this.token == separator) {
        if (preserveFirstSeparator) result.push('');
        this.next();
      }

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
  [
    require('./parser/array.js')(api, tokens, EOF),
    require('./parser/class.js')(api, tokens, EOF),
    require('./parser/expr.js')(api, tokens, EOF),
    require('./parser/function.js')(api, tokens, EOF),
    require('./parser/if.js')(api, tokens, EOF),
    require('./parser/loops.js')(api, tokens, EOF),
    require('./parser/main.js')(api, tokens, EOF),
    require('./parser/namespace.js')(api, tokens, EOF),
    require('./parser/scalar.js')(api, tokens, EOF),
    require('./parser/statement.js')(api, tokens, EOF),
    require('./parser/switch.js')(api, tokens, EOF),
    require('./parser/try.js')(api, tokens, EOF),
    require('./parser/comment.js')(api, tokens, EOF),
    require('./parser/variable.js')(api, tokens, EOF)
  ].forEach(function (ext) {
    for(var k in ext) {
      api[k] = ext[k];
    }
  });
  
  return api;
};
