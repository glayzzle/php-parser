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
 * The PHP Parser class that build the AST tree from the lexer
 * @constructor {Parser}
 * @property {Lexer} lexer - current lexer instance
 * @property {AST} ast - the AST factory instance
 * @property {Integer|String} token - current token
 * @property {Boolean} extractDoc - should extract documentation as AST node
 * @property {Boolean} suppressErrors - should ignore parsing errors and continue
 * @property {Boolean} debug - should output debug informations
 */
var parser = function(lexer, ast) {
  this.lexer = lexer;
  this.ast = ast;
  this.tok = lexer.tok;
  this.EOF = lexer.EOF;
  this.token = null;
  this.prev = null;
  this.debug = false;
  this.extractDoc = false;
  this.suppressErrors = false;
  this.entries = {
    'IDENTIFIER': [
      this.tok.T_CLASS_C,
      this.tok.T_DIR,
      this.tok.T_FILE,
      this.tok.T_FUNC_C,
      this.tok.T_LINE,
      this.tok.T_METHOD_C,
      this.tok.T_NS_C,
      this.tok.T_TRAIT,
      this.tok.T_ABSTRACT,
      this.tok.T_LOGICAL_AND,
      this.tok.T_ARRAY,
      this.tok.T_AS,
      this.tok.T_BREAK,
      this.tok.T_CALLABLE,
      this.tok.T_CASE,
      this.tok.T_CATCH,
      this.tok.T_CLASS,
      this.tok.T_CLONE,
      this.tok.T_CONST,
      this.tok.T_CONTINUE,
      this.tok.T_DECLARE,
      this.tok.T_DEFAULT,
      this.tok.T_DO,
      this.tok.T_ECHO,
      this.tok.T_ELSE,
      this.tok.T_ELSEIF,
      this.tok.T_EMPTY,
      this.tok.T_ENDDECLARE,
      this.tok.T_ENDFOR,
      this.tok.T_ENDFOREACH,
      this.tok.T_ENDIF,
      this.tok.T_ENDSWITCH,
      this.tok.T_ENDWHILE,
      this.tok.T_EVAL,
      this.tok.T_EXIT,
      this.tok.T_EXTENDS,
      this.tok.T_FINAL,
      this.tok.T_FINALLY,
      this.tok.T_FOR,
      this.tok.T_FOREACH,
      this.tok.T_FUNCTION,
      this.tok.T_GLOBAL,
      this.tok.T_GOTO,
      this.tok.T_IF,
      this.tok.T_IMPLEMENTS,
      this.tok.T_INCLUDE,
      this.tok.T_INCLUDE_ONCE,
      this.tok.T_INSTANCEOF,
      this.tok.T_INSTEADOF,
      this.tok.T_INTERFACE,
      this.tok.T_ISSET,
      this.tok.T_LIST,
      this.tok.T_NAMESPACE,
      this.tok.T_NEW,
      this.tok.T_LOGICAL_OR,
      this.tok.T_PRINT,
      this.tok.T_PRIVATE,
      this.tok.T_PROTECTED,
      this.tok.T_PUBLIC,
      this.tok.T_REQUIRE,
      this.tok.T_REQUIRE_ONCE,
      this.tok.T_RETURN,
      this.tok.T_STATIC,
      this.tok.T_SWITCH,
      this.tok.T_THROW,
      this.tok.T_TRAIT,
      this.tok.T_TRY,
      this.tok.T_UNSET,
      this.tok.T_USE,
      this.tok.T_VAR,
      this.tok.T_WHILE,
      this.tok.T_LOGICAL_XOR,
      this.tok.T_YIELD
    ],
    'VARIABLE': [
      this.tok.T_VARIABLE,
      '$', '&',
      this.tok.T_NS_SEPARATOR,
      this.tok.T_STRING,
      this.tok.T_NAMESPACE,
      this.tok.T_STATIC
    ],
    'SCALAR': [
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
parser.prototype.parse = function(code, filename) {
  this._errors = [];
  this.filename = filename || 'eval';
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
      if (Array.isArray(node)) {
        childs = childs.concat(node);
      } else {
        childs.push(node);
      }
    }
  }
  return program(childs, this._errors);
};

/**
 * Raise an error
 */
parser.prototype.raiseError = function(message, msgExpect, expect, token) {
  message += ' on line ' + this.lexer.yylloc.first_line;
  if (!this.suppressErrors) {
    var err = new SyntaxError(
      message, this.filename, this.lexer.yylloc.first_line
    );
    err.lineNumber = this.lexer.yylloc.first_line;
    err.fileName = this.filename;
    err.columnNumber = this.lexer.yylloc.first_column
    throw err;
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
    msg,
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
 * @return {boolean}
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
    return false;
  }
  return true;
};

/** outputs some debug information on current token **/
var ignoreStack = ['parser.next', 'parser.ignoreComments', 'parser.nextWithComments'];
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
 * @return {boolean}
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
  return true;
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

// extends the parser with syntax files
[
  require('./parser/array.js'),
  require('./parser/class.js'),
  require('./parser/comment.js'),
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
  require('./parser/utils.js'),
  require('./parser/variable.js')
].forEach(function (ext) {
  for(var k in ext) {
    parser.prototype[k] = ext[k];
  }
});

module.exports = parser;
