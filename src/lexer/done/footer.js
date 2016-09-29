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

// fix of eating just one char on any char mode (and counting lines twice on windows)
lexer.test_match = function (match, indexed_rule) {
  var token,
      lines,
      backup;

  if (this.options.backtrack_lexer) {
      // save context
      backup = {
        yylineno: this.yylineno,
        yylloc: {
          first_line: this.yylloc.first_line,
          last_line: this.last_line,
          first_column: this.yylloc.first_column,
          last_column: this.yylloc.last_column
        },
        yytext: this.yytext,
        match: this.match,
        matches: this.matches,
        matched: this.matched,
        yyleng: this.yyleng,
        offset: this.offset,
        _more: this._more,
        _input: this._input,
        yy: this.yy,
        conditionStack: this.conditionStack.slice(0),
        done: this.done
      };
      if (this.options.ranges) {
        backup.yylloc.range = this.yylloc.range.slice(0);
      }
  }

  lines = match[0].match(/(?:\r\n?|\n).*/g);
  if (lines) {
    this.yylineno += lines.length;
    if (match[0].length === 1 && this._input[0] === '\r' && this._input[1] === '\n') {
      match[0] += '\n'; // make it match entire line return (windows)
    }
  }
  this.yylloc = {
      first_line: this.yylloc.last_line,
      last_line: this.yylineno + 1,
      first_column: this.yylloc.last_column,
      last_column: lines ?
                   lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                   this.yylloc.last_column + match[0].length
  };
  this.yytext += match[0];
  this.match += match[0];
  this.matches = match;
  this.yyleng = this.yytext.length;
  if (this.options.ranges) {
    this.yylloc.range = [this.offset, this.offset += this.yyleng];
  }
  this._more = false;
  this._backtrack = false;
  this._input = this._input.slice(match[0].length);
  this.matched += match[0];
  token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
  if (this.done && this._input) {
    this.done = false;
  }
  if (token) {
    return token;
  } else if (this._backtrack) {
    // recover context
    for (var k in backup) {
      this[k] = backup[k];
    }
    return false; // rule action called reject() implying the next rule should be tested instead.
  }
  return false;
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