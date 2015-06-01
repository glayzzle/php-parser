
// defines if all tokens must be retrieved (used by token_get_all only)
lexer.all_tokens = true;
// enables the evald mode (ignore opening tags)
lexer.mode_eval = false;
// disables by default asp tags mode
lexer.asp_tags = false;
// enables by default short tags mode
lexer.short_tags = true;
// change lexer algorithm
var lex = lexer.lex;
lexer.lex = function() {
  var token = lex.call(this);
  if (!this.all_tokens) {
    while(
      token === T_WHITESPACE      // ignore white space
      || token === T_COMMENT      // ignore single lines comments
      || token === T_DOC_COMMENT  // ignore doc comments
      || (
        !this.mode_eval // ignore open/close tags
        && (
          token === T_OPEN_TAG
        )
      )
    ) {
      token = lex.call(this);
    }
    if (!this.mode_eval && token == T_OPEN_TAG_WITH_ECHO) {
      // open tag with echo statement
      return T_ECHO; 
    }
  }
  return token;
};

// fix of input algorithm @see https://github.com/zaach/jison-lex/pull/10
lexer.input = function() {
  var ch = this._input[0];
  if ( ch == '\r' && this._input[1] == '\n' ) {
      ch += '\n'; 
      this.yyleng++;
      this.offset++;
      this._input = this._input.slice(1);
      if (this.options.ranges) {
          this.yylloc.range[1]++;
      }
  }
  this.yytext += ch;
  this.yyleng++;
  this.offset++;
  this.match += ch;
  this.matched += ch;
  var lines = ch.match(/(?:\r\n?|\n).*/g);
  if (lines) {
      this.yylineno++;
      this.yylloc.last_line++;
  } else {
      this.yylloc.last_column++;
  }
  if (this.options.ranges) {
      this.yylloc.range[1]++;
  }

  this._input = this._input.slice(1);
  return ch;
};

// FORCE TO CHANGE THE INITIAL STATE IN EVAL MODE
var setInput = lexer.setInput;
lexer.setInput = function (input, yy) {
  setInput.call(this, input, yy);
  if (
    !this.all_tokens && this.mode_eval
  ) {
    this.conditionStack = ['ST_IN_SCRIPTING'];
  }
};

module.exports = lexer;