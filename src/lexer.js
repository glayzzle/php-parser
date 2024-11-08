/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

/**
 * This is the php lexer. It will tokenize the string for helping the
 * parser to build the AST from its grammar.
 *
 * @constructor Lexer
 * @memberOf module:php-parser
 * @property {number} EOF
 * @property {boolean} all_tokens defines if all tokens must be retrieved (used by token_get_all only)
 * @property {boolean} comment_tokens extracts comments tokens
 * @property {boolean} mode_eval enables the evald mode (ignore opening tags)
 * @property {boolean} asp_tags disables by default asp tags mode
 * @property {boolean} short_tags enables by default short tags mode
 * @property {object} keywords List of php keyword
 * @property {object} castKeywords List of php keywords for type casting
 */
const Lexer = function (engine) {
  this.engine = engine;
  this.tok = this.engine.tokens.names;
  this.EOF = 1;
  this.debug = false;
  this.all_tokens = true;
  this.comment_tokens = false;
  this.mode_eval = false;
  this.asp_tags = false;
  this.short_tags = false;
  this.version = 801;
  this.yyprevcol = 0;
  this.keywords = {
    __class__: this.tok.T_CLASS_C,
    __trait__: this.tok.T_TRAIT_C,
    __function__: this.tok.T_FUNC_C,
    __method__: this.tok.T_METHOD_C,
    __line__: this.tok.T_LINE,
    __file__: this.tok.T_FILE,
    __dir__: this.tok.T_DIR,
    __namespace__: this.tok.T_NS_C,
    exit: this.tok.T_EXIT,
    die: this.tok.T_EXIT,
    function: this.tok.T_FUNCTION,
    const: this.tok.T_CONST,
    return: this.tok.T_RETURN,
    try: this.tok.T_TRY,
    catch: this.tok.T_CATCH,
    finally: this.tok.T_FINALLY,
    throw: this.tok.T_THROW,
    if: this.tok.T_IF,
    elseif: this.tok.T_ELSEIF,
    endif: this.tok.T_ENDIF,
    else: this.tok.T_ELSE,
    while: this.tok.T_WHILE,
    endwhile: this.tok.T_ENDWHILE,
    do: this.tok.T_DO,
    for: this.tok.T_FOR,
    endfor: this.tok.T_ENDFOR,
    foreach: this.tok.T_FOREACH,
    endforeach: this.tok.T_ENDFOREACH,
    declare: this.tok.T_DECLARE,
    enddeclare: this.tok.T_ENDDECLARE,
    instanceof: this.tok.T_INSTANCEOF,
    as: this.tok.T_AS,
    switch: this.tok.T_SWITCH,
    endswitch: this.tok.T_ENDSWITCH,
    case: this.tok.T_CASE,
    default: this.tok.T_DEFAULT,
    break: this.tok.T_BREAK,
    continue: this.tok.T_CONTINUE,
    goto: this.tok.T_GOTO,
    echo: this.tok.T_ECHO,
    print: this.tok.T_PRINT,
    class: this.tok.T_CLASS,
    interface: this.tok.T_INTERFACE,
    trait: this.tok.T_TRAIT,
    enum: this.tok.T_ENUM,
    extends: this.tok.T_EXTENDS,
    implements: this.tok.T_IMPLEMENTS,
    new: this.tok.T_NEW,
    clone: this.tok.T_CLONE,
    var: this.tok.T_VAR,
    eval: this.tok.T_EVAL,
    include: this.tok.T_INCLUDE,
    include_once: this.tok.T_INCLUDE_ONCE,
    require: this.tok.T_REQUIRE,
    require_once: this.tok.T_REQUIRE_ONCE,
    namespace: this.tok.T_NAMESPACE,
    use: this.tok.T_USE,
    insteadof: this.tok.T_INSTEADOF,
    global: this.tok.T_GLOBAL,
    isset: this.tok.T_ISSET,
    empty: this.tok.T_EMPTY,
    __halt_compiler: this.tok.T_HALT_COMPILER,
    static: this.tok.T_STATIC,
    abstract: this.tok.T_ABSTRACT,
    final: this.tok.T_FINAL,
    private: this.tok.T_PRIVATE,
    protected: this.tok.T_PROTECTED,
    public: this.tok.T_PUBLIC,
    unset: this.tok.T_UNSET,
    list: this.tok.T_LIST,
    array: this.tok.T_ARRAY,
    callable: this.tok.T_CALLABLE,
    or: this.tok.T_LOGICAL_OR,
    and: this.tok.T_LOGICAL_AND,
    xor: this.tok.T_LOGICAL_XOR,
    match: this.tok.T_MATCH,
    readonly: this.tok.T_READ_ONLY,
  };
  this.castKeywords = {
    int: this.tok.T_INT_CAST,
    integer: this.tok.T_INT_CAST,
    real: this.tok.T_DOUBLE_CAST,
    double: this.tok.T_DOUBLE_CAST,
    float: this.tok.T_DOUBLE_CAST,
    string: this.tok.T_STRING_CAST,
    binary: this.tok.T_STRING_CAST,
    array: this.tok.T_ARRAY_CAST,
    object: this.tok.T_OBJECT_CAST,
    bool: this.tok.T_BOOL_CAST,
    boolean: this.tok.T_BOOL_CAST,
    unset: this.tok.T_UNSET_CAST,
  };
};

/**
 * Initialize the lexer with the specified input
 * @function Lexer#setInput
 * @memberOf module:php-parser
 */
Lexer.prototype.setInput = function (input) {
  this._input = input;
  this.size = input.length;
  this.yylineno = 1;
  this.offset = 0;
  this.yyprevcol = 0;
  this.yytext = "";
  this.yylloc = {
    first_offset: 0,
    first_line: 1,
    first_column: 0,
    prev_offset: 0,
    prev_line: 1,
    prev_column: 0,
    last_line: 1,
    last_column: 0,
  };
  this.tokens = [];
  if (this.version > 703) {
    this.keywords.fn = this.tok.T_FN;
  } else {
    delete this.keywords.fn;
  }
  this.done = this.offset >= this.size;
  if (!this.all_tokens && this.mode_eval) {
    this.conditionStack = ["INITIAL"];
    this.begin("ST_IN_SCRIPTING");
  } else {
    this.conditionStack = [];
    this.begin("INITIAL");
  }
  // https://github.com/php/php-src/blob/999e32b65a8a4bb59e27e538fa68ffae4b99d863/Zend/zend_language_scanner.h#L59
  // Used for heredoc and nowdoc
  this.heredoc_label = {
    label: "",
    length: 0,
    indentation: 0,
    indentation_uses_spaces: false,
    finished: false,
    /*
     * this used for parser to detemine the if current node segment is first encaps node.
     * if ture, the indentation will remove from the begining. and if false, the prev node
     * might be a variable '}' ,and the leading spaces should not be removed util meet the
     * first \n
     */
    first_encaps_node: false,
    // for backward compatible
    /* istanbul ignore next */
    toString: function () {
      this.label;
    },
  };
  return this;
};

/**
 * consumes and returns one char from the input
 * @function Lexer#input
 * @memberOf module:php-parser
 */
Lexer.prototype.input = function () {
  const ch = this._input[this.offset];
  if (!ch) return "";
  this.yytext += ch;
  this.offset++;
  if (ch === "\r" && this._input[this.offset] === "\n") {
    this.yytext += "\n";
    this.offset++;
  }
  if (ch === "\n" || ch === "\r") {
    this.yylloc.last_line = ++this.yylineno;
    this.yyprevcol = this.yylloc.last_column;
    this.yylloc.last_column = 0;
  } else {
    this.yylloc.last_column++;
  }
  return ch;
};

/**
 * revert eating specified size
 * @function Lexer#unput
 * @memberOf module:php-parser
 */
Lexer.prototype.unput = function (size) {
  if (size === 1) {
    // 1 char unput (most cases)
    this.offset--;
    if (
      this._input[this.offset] === "\n" &&
      this._input[this.offset - 1] === "\r"
    ) {
      this.offset--;
      size++;
    }
    if (
      this._input[this.offset] === "\r" ||
      this._input[this.offset] === "\n"
    ) {
      this.yylloc.last_line--;
      this.yylineno--;
      this.yylloc.last_column = this.yyprevcol;
    } else {
      this.yylloc.last_column--;
    }
    this.yytext = this.yytext.substring(0, this.yytext.length - size);
  } else if (size > 0) {
    this.offset -= size;
    if (size < this.yytext.length) {
      this.yytext = this.yytext.substring(0, this.yytext.length - size);
      // re-calculate position
      this.yylloc.last_line = this.yylloc.first_line;
      this.yylloc.last_column = this.yyprevcol = this.yylloc.first_column;
      for (let i = 0; i < this.yytext.length; i++) {
        let c = this.yytext[i];
        if (c === "\r") {
          c = this.yytext[++i];
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_line++;
          this.yylloc.last_column = 0;
          if (c !== "\n") {
            if (c === "\r") {
              this.yylloc.last_line++;
            } else {
              this.yylloc.last_column++;
            }
          }
        } else if (c === "\n") {
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_line++;
          this.yylloc.last_column = 0;
        } else {
          this.yylloc.last_column++;
        }
      }
      this.yylineno = this.yylloc.last_line;
    } else {
      // reset full text
      this.yytext = "";
      this.yylloc.last_line = this.yylineno = this.yylloc.first_line;
      this.yylloc.last_column = this.yylloc.first_column;
    }
  }

  return this;
};

/**
 * check if the text matches
 * @function Lexer#tryMatch
 * @memberOf module:php-parser
 * @param {string} text
 * @returns {boolean}
 */
Lexer.prototype.tryMatch = function (text) {
  return text === this.ahead(text.length);
};

/**
 * check if the text matches
 * @function Lexer#tryMatchCaseless
 * @memberOf module:php-parser
 * @param {string} text
 * @returns {boolean}
 */
Lexer.prototype.tryMatchCaseless = function (text) {
  return text === this.ahead(text.length).toLowerCase();
};

/**
 * look ahead
 * @function Lexer#ahead
 * @memberOf module:php-parser
 * @param {number} size
 * @returns {string}
 */
Lexer.prototype.ahead = function (size) {
  let text = this._input.substring(this.offset, this.offset + size);
  if (
    text[text.length - 1] === "\r" &&
    this._input[this.offset + size + 1] === "\n"
  ) {
    text += "\n";
  }
  return text;
};

/**
 * consume the specified size
 * @function Lexer#consume
 * @memberOf module:php-parser
 * @param {number} size
 * @returns {Lexer}
 */
Lexer.prototype.consume = function (size) {
  for (let i = 0; i < size; i++) {
    const ch = this._input[this.offset];
    if (!ch) break;
    this.yytext += ch;
    this.offset++;
    if (ch === "\r" && this._input[this.offset] === "\n") {
      this.yytext += "\n";
      this.offset++;
      i++;
    }
    if (ch === "\n" || ch === "\r") {
      this.yylloc.last_line = ++this.yylineno;
      this.yyprevcol = this.yylloc.last_column;
      this.yylloc.last_column = 0;
    } else {
      this.yylloc.last_column++;
    }
  }
  return this;
};

/**
 * Gets the current state
 * @function Lexer#getState
 * @memberOf module:php-parser
 */
Lexer.prototype.getState = function () {
  return {
    yytext: this.yytext,
    offset: this.offset,
    yylineno: this.yylineno,
    yyprevcol: this.yyprevcol,
    yylloc: {
      first_offset: this.yylloc.first_offset,
      first_line: this.yylloc.first_line,
      first_column: this.yylloc.first_column,
      last_line: this.yylloc.last_line,
      last_column: this.yylloc.last_column,
    },
    heredoc_label: this.heredoc_label,
  };
};

/**
 * Sets the current lexer state
 * @function Lexer#setState
 * @memberOf module:php-parser
 */
Lexer.prototype.setState = function (state) {
  this.yytext = state.yytext;
  this.offset = state.offset;
  this.yylineno = state.yylineno;
  this.yyprevcol = state.yyprevcol;
  this.yylloc = state.yylloc;
  if (state.heredoc_label) {
    this.heredoc_label = state.heredoc_label;
  }
  return this;
};

/**
 * prepend next token
 * @function Lexer#appendToken
 * @memberOf module:php-parser
 * @param {*} value
 * @param {*} ahead
 * @returns {Lexer}
 */
Lexer.prototype.appendToken = function (value, ahead) {
  this.tokens.push([value, ahead]);
  return this;
};

/**
 * return next match that has a token
 * @function Lexer#lex
 * @memberOf module:php-parser
 * @returns {number|string}
 */
Lexer.prototype.lex = function () {
  this.yylloc.prev_offset = this.offset;
  this.yylloc.prev_line = this.yylloc.last_line;
  this.yylloc.prev_column = this.yylloc.last_column;
  let token = this.next() || this.lex();
  if (!this.all_tokens) {
    while (
      token === this.tok.T_WHITESPACE || // ignore white space
      (!this.comment_tokens &&
        (token === this.tok.T_COMMENT || // ignore single lines comments
          token === this.tok.T_DOC_COMMENT)) || // ignore doc comments
      // ignore open tags
      token === this.tok.T_OPEN_TAG
    ) {
      token = this.next() || this.lex();
    }
    if (token == this.tok.T_OPEN_TAG_WITH_ECHO) {
      // https://github.com/php/php-src/blob/7ff186434e82ee7be7c59d0db9a976641cf7b09c/Zend/zend_compile.c#L1683
      // open tag with echo statement
      return this.tok.T_ECHO;
    } else if (token === this.tok.T_CLOSE_TAG) {
      // https://github.com/php/php-src/blob/7ff186434e82ee7be7c59d0db9a976641cf7b09c/Zend/zend_compile.c#L1680
      return ";"; /* implicit ; */
    }
  }
  if (!this.yylloc.prev_offset) {
    this.yylloc.prev_offset = this.yylloc.first_offset;
    this.yylloc.prev_line = this.yylloc.first_line;
    this.yylloc.prev_column = this.yylloc.first_column;
  }
  /*else if (this.yylloc.prev_offset === this.offset && this.offset !== this.size) {
    throw new Error('Infinite loop @ ' + this.offset + ' / ' + this.size);
  }*/
  return token;
};

/**
 * activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
 * @function Lexer#begin
 * @memberOf module:php-parser
 * @param {*} condition
 * @returns {Lexer}
 */
Lexer.prototype.begin = function (condition) {
  this.conditionStack.push(condition);
  this.curCondition = condition;
  this.stateCb = this["match" + condition];
  /* istanbul ignore next */
  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + condition + '"');
  }
  return this;
};

/**
 * pop the previously active lexer condition state off the condition stack
 * @function Lexer#popState
 * @memberOf module:php-parser
 * @returns {string|*}
 */
Lexer.prototype.popState = function () {
  const n = this.conditionStack.length - 1;
  const condition = n > 0 ? this.conditionStack.pop() : this.conditionStack[0];
  this.curCondition = this.conditionStack[this.conditionStack.length - 1];
  this.stateCb = this["match" + this.curCondition];
  /* istanbul ignore next */
  if (typeof this.stateCb !== "function") {
    throw new Error('Undefined condition state "' + this.curCondition + '"');
  }
  return condition;
};

/**
 * return next match in input
 * @function Lexer#next
 * @memberOf module:php-parser
 * @returns {number|*}
 */
Lexer.prototype.next = function () {
  let token;
  if (!this._input) {
    this.done = true;
  }
  this.yylloc.first_offset = this.offset;
  this.yylloc.first_line = this.yylloc.last_line;
  this.yylloc.first_column = this.yylloc.last_column;
  this.yytext = "";
  if (this.done) {
    this.yylloc.prev_offset = this.yylloc.first_offset;
    this.yylloc.prev_line = this.yylloc.first_line;
    this.yylloc.prev_column = this.yylloc.first_column;
    return this.EOF;
  }
  if (this.tokens.length > 0) {
    token = this.tokens.shift();
    if (typeof token[1] === "object") {
      this.setState(token[1]);
    } else {
      this.consume(token[1]);
    }
    token = token[0];
  } else {
    token = this.stateCb.apply(this, []);
  }
  if (this.offset >= this.size && this.tokens.length === 0) {
    this.done = true;
  }
  /* istanbul ignore next */
  if (this.debug) {
    let tName = token;
    if (typeof tName === "number") {
      tName = this.engine.tokens.values[tName];
    } else {
      tName = '"' + tName + '"';
    }
    const e = new Error(
      tName +
        "\tfrom " +
        this.yylloc.first_line +
        "," +
        this.yylloc.first_column +
        "\t - to " +
        this.yylloc.last_line +
        "," +
        this.yylloc.last_column +
        '\t"' +
        this.yytext +
        '"',
    );
    // eslint-disable-next-line no-console
    console.error(e.stack);
  }
  return token;
};

// extends the lexer with states
[
  require("./lexer/attribute.js"),
  require("./lexer/comments.js"),
  require("./lexer/initial.js"),
  require("./lexer/numbers.js"),
  require("./lexer/property.js"),
  require("./lexer/scripting.js"),
  require("./lexer/strings.js"),
  require("./lexer/tokens.js"),
  require("./lexer/utils.js"),
].forEach(function (ext) {
  for (const k in ext) {
    Lexer.prototype[k] = ext[k];
  }
});

module.exports = Lexer;
