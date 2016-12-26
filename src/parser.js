/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

/**
 * @private check if argument is a number
 */
function isNumber(n) {
  return n != '.' && n != ',' && !isNaN(parseFloat(n)) && isFinite(n);
}


/**
 * The PHP Parser class
 *
 * @public @constructor {Parser}
 * @property {Integer} EOF
 * @property {Lexer} lexer
 * @property {Integer|String} token
 * @property {Boolean} extractDoc
 * @property {Boolean} debug
 */
var parser = function(lexer, ast) {
  this.lexer = lexer;
  this.ast = ast;
  this.tok = lexer.tok;
  this.EOF = lexer.EOF;
  // Private vars, do not use directly
  this._gracefulProxy = {};
  this._graceful = false;
  this.token = null;
  this.prev = null;
  this.debug = false;
  this.extractDoc = false;
  this.suppressErrors = false;
  this.lastError = false;
  this.startAt = [];
  this.entries = {
    'SCALAR': [
      this.tok.T_CONSTANT_ENCAPSED_STRING,
      this.tok.T_START_HEREDOC,
      this.tok.T_LNUMBER,
      this.tok.T_DNUMBER,
      this.tok.T_STRING,
      this.tok.T_ARRAY,'[',
      this.tok.T_CLASS_C,
      this.tok.T_TRAIT_C,
      this.tok.T_FUNC_C,
      this.tok.T_METHOD_C,
      this.tok.T_LINE,
      this.tok.T_FILE,
      this.tok.T_DIR,
      this.tok.T_NS_C,
      '"',
      'b"',
      'B"',
      '-',
      this.tok.T_NS_SEPARATOR
    ],
    'T_MAGIC_CONST': [
        this.tok.T_CLASS_C,
        this.tok.T_TRAIT_C,
        this.tok.T_FUNC_C,
        this.tok.T_METHOD_C,
        this.tok.T_LINE,
        this.tok.T_FILE,
        this.tok.T_DIR,
        this.tok.T_NS_C
    ],
    'T_MEMBER_FLAGS': [
      this.tok.T_PUBLIC,
      this.tok.T_PRIVATE,
      this.tok.T_PROTECTED,
      this.tok.T_STATIC,
      this.tok.T_ABSTRACT,
      this.tok.T_FINAL
    ],
    'VARIABLE': [
      this.tok.T_VARIABLE,
      '$',
      this.tok.T_NS_SEPARATOR,
      this.tok.T_STRING,
      this.tok.T_STATIC
    ],
    'EOS': [
      ';',
      this.tok.T_CLOSE_TAG,
      this.EOF,
      this.tok.T_INLINE_HTML
    ],
    'EXPR': [
      '@','-','+','!','~','(','`',
      this.tok.T_LIST,
      this.tok.T_CLONE,
      this.tok.T_INC,
      this.tok.T_DEC,
      this.tok.T_NEW,
      this.tok.T_ISSET,
      this.tok.T_EMPTY,
      this.tok.T_INCLUDE,
      this.tok.T_INCLUDE_ONCE,
      this.tok.T_REQUIRE,
      this.tok.T_REQUIRE_ONCE,
      this.tok.T_EVAL,
      this.tok.T_INT_CAST,
      this.tok.T_DOUBLE_CAST,
      this.tok.T_STRING_CAST,
      this.tok.T_ARRAY_CAST,
      this.tok.T_OBJECT_CAST,
      this.tok.T_BOOL_CAST,
      this.tok.T_UNSET_CAST,
      this.tok.T_EXIT,
      this.tok.T_PRINT,
      this.tok.T_YIELD,
      this.tok.T_STATIC,
      this.tok.T_FUNCTION,
      // using VARIABLES :
      this.tok.T_VARIABLE,
      '$',
      this.tok.T_NS_SEPARATOR,
      this.tok.T_STRING,
      // using SCALAR :
      this.tok.T_STRING, // @see variable.js line 45 > conflict with variable = shift/reduce :)
      this.tok.T_CONSTANT_ENCAPSED_STRING,
      this.tok.T_START_HEREDOC,
      this.tok.T_LNUMBER,
      this.tok.T_DNUMBER,
      this.tok.T_ARRAY,'[',
      this.tok.T_CLASS_C,
      this.tok.T_TRAIT_C,
      this.tok.T_FUNC_C,
      this.tok.T_METHOD_C,
      this.tok.T_LINE,
      this.tok.T_FILE,
      this.tok.T_DIR,
      this.tok.T_NS_C
    ]
  };
};

/**
 * helper : gets a token name
 */
parser.prototype.getTokenName = function(token) {
  if (!isNumber(token)) {
    return "'" + token + "'";
  } else {
    if (token == this.EOF) return 'the end of file (EOF)';
    return this.lexer.engine.tokens.values[token];
  }
};

/**
 * main entry point : converts a source code to AST
 */
parser.prototype.parse = function(code) {
  this._errors = [];
  this.currentNamespace = [''];
  this.lexer.setInput(code);
  this.lexer.comment_tokens = this.extractDoc;
  this.length = this.lexer._input.length;
  this.innerList = false;
  var program = this.ast.prepare('program', this);
  var childs = [];
  this.nextWithComments();
  while(this.token != this.EOF) {
    var node = this.read_start();
    if (node !== null && node !== undefined) {
      childs.push(node);
    }
  }
  return program(childs, this._errors);
};

/**
 * Raise an error
 */
parser.prototype.raiseError = function(message, msgExpect, expect, token) {
  if (!this.suppressErrors) {
    throw new Error(message);
  }
  // Error node :
  var node = this.ast.prepare('error', this)(
    message, token, this.lexer.yylloc.first_line, expect
  );
  this._errors.push(node);
  return node;
};

/**
 * handling errors
 */
parser.prototype.error = function(expect) {
  var msg = 'Parse Error : syntax error';
  token = this.getTokenName(this.token);
  if (this.token !== this.EOF) {
    if (isNumber(this.token)) {
      var symbol = this.text();
      if (symbol.length > 10) {
        symbol = symbol.substring(0, 7) + '...';
      }
      token = '\''+symbol+'\' ('+token+')';
    }
    msg += ', unexpected ' + token;
  }
  var msgExpect = '';
  if (expect && !Array.isArray(expect)) {
    if (isNumber(expect) || expect.length === 1) {
      msgExpect = ', expecting ' + this.getTokenName(expect);
    }
    msg += msgExpect;
  }
  this.token !== this.EOF
  return this.raiseError(
    msg + ' on line ' + this.lexer.yylloc.first_line,
    msgExpect,
    expect,
    token
  );
};

/**
 * Creates a new AST node
 */
parser.prototype.node = function(name) {
  return this.ast.prepare(name, this);
};

/**
 * expects an end of statement or end of file
 */
parser.prototype.expectEndOfStatement = function() {
  if (this.token === ';') {
    this.nextWithComments();
    if (this.token === this.tok.T_CLOSE_TAG) {
      // strip close tag (statement already closed with ';')
      this.nextWithComments();
    }
  } else if (this.token === this.tok.T_CLOSE_TAG) {
    this.nextWithComments();
  } else if (this.token !== this.tok.T_INLINE_HTML && this.token !== this.EOF) {
    this.error(';');
  }
  return this;
};

/** outputs some debug information on current token **/
var ignoreStack = ['parser.next', 'parser.nextWithComments'];
parser.prototype.showlog = function() {
  var stack = (new Error()).stack.split('\n');
  var line;
  for (var offset = 2; offset < stack.length; offset ++) {
    line = stack[offset].trim();
    var found = false;
    for(var i = 0; i < ignoreStack.length; i++) {
      if (line.substring(3, 3 + ignoreStack[i].length) === ignoreStack[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      break;
    }
  }

  console.log(
    'Line '
    + this.lexer.yylloc.first_line
    + ' : '
    + this.getTokenName(this.token)
    + ">" + this.lexer.yytext + "<"
    + ' @-->' + line
  );
  return this;
};

/**
 * Force the parser to check the current token.
 *
 * If the current token does not match to expected token,
 * the an error will be raised.
 *
 * If the suppressError mode is activated, then the error will
 * be added to the program error stack and this function will return `false`.
 *
 * @param {String|Number} token
 * @return {Parser|False}
 * @throws Error
 */
parser.prototype.expect = function(token) {
  if (Array.isArray(token)) {
    if (token.indexOf(this.token) === -1) {
      this.error(token);
      return false;
    }
  } else if (this.token != token) {
    this.error(token);
    return false;
  }
  return this;
};

/**
 * Returns the current token contents
 * @return {String}
 */
parser.prototype.text = function() {
  return this.lexer.yytext;
};

/** consume the next token **/
parser.prototype.next = function() {
  if (this.debug) {
    this.showlog();
    this.debug = false;
    this.nextWithComments().ignoreComments();
    this.debug = true;
  } else {
    this.nextWithComments().ignoreComments();
  }
  return this;
};

/** consume comments (if found) **/
parser.prototype.ignoreComments = function() {
  if (this.debug) this.showlog();
  while(this.token === this.tok.T_COMMENT || this.token === this.tok.T_DOC_COMMENT) {
    // IGNORE COMMENTS
    this.nextWithComments();
  }
  return this;
};

/** consume the next token (including doc) **/
parser.prototype.nextWithComments = function() {
  this.prev = [
    this.lexer.yylloc.first_line,
    this.lexer.yylloc.first_column,
    this.lexer.offset
  ];
  this.token = this.lexer.lex() || this.EOF;
  if (this.debug) this.showlog();
  return this;
};

/**
 * Check if token is of specified type
 */
parser.prototype.is = function(type) {
  if (Array.isArray(type)) {
    return type.indexOf(this.token) !== -1;
  } else {
    return this.entries[type].indexOf(this.token) != -1;
  }
};

/** convert an token to ast **/
parser.prototype.read_token = function() {
  var result = this.token;
  if (isNumber(result)) {
    result = [result, this.text(), this.lexer.yylloc.first_line];
  }
  this.next();
  return result;
};

/**
 * Helper : reads a list of tokens / sample : T_STRING ',' T_STRING ...
 * ```ebnf
 * list ::= separator? ( item separator )* item
 * ```
 */
parser.prototype.read_list = function(item, separator, preserveFirstSeparator) {
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
    } while(this.next().token != this.EOF);
  } else {
    result.push(this.expect(item).text());
    while (this.next().token != this.EOF) {
      if (this.token != separator) break;
      // trim current separator & check item
      if (this.next().token != item) break;
      result.push(this.text());
    }
  }
  return result;
};


// extends the parser with syntax files
[
  require('./parser/array.js'),
  require('./parser/class.js'),
  require('./parser/expr.js'),
  require('./parser/function.js'),
  require('./parser/if.js'),
  require('./parser/loops.js'),
  require('./parser/main.js'),
  require('./parser/namespace.js'),
  require('./parser/scalar.js'),
  require('./parser/statement.js'),
  require('./parser/switch.js'),
  require('./parser/try.js'),
  require('./parser/comment.js'),
  require('./parser/variable.js')
].forEach(function (ext) {
  for(var k in ext) {
    parser.prototype[k] = ext[k];
  }
});

module.exports = parser;
