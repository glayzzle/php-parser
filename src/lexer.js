/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
 
var fs = require('fs');
 
/**
 * Expose the lexer constructor
 */
module.exports = function(engine) {

  var tokens = engine.tokens.names;
  
  var api = {
    EOF:1,
    // defines if all tokens must be retrieved (used by token_get_all only)
    all_tokens: true,
    // extracts comments tokens
    comment_tokens: false,
    // enables the evald mode (ignore opening tags)
    mode_eval: false,
    // disables by default asp tags mode
    asp_tags: false,
    // enables by default short tags mode
    short_tags: true,
    // las column
    yyprevcol: 0,
    // initialize the lexer with the specified input
    setInput: function(input) {
      this._input = input;
      this.size = input.length;
      this.yylineno = 1;
      this.offset = 0;
      this.yyprevcol = 0;
      this.yytext = '';
      this.yylloc = {
        first_line: 1,
        first_column: 0,
        last_line: 1,
        last_column: 0
      };
      this.tokens = [];
      this.conditionStack = [];
      this.done = this.offset >= this.size;
      if (!this.all_tokens && this.mode_eval) {
        this.begin('ST_IN_SCRIPTING');
      } else {
        this.begin('INITIAL');
      }
      return this;
    },
    // consumes and returns one char from the input
    input: function(size) {
      var ch = this._input[this.offset];
      if (!ch) return '';
      this.yytext += ch;
      this.offset ++;
      if ( ch === '\r' && this._input[this.offset] === '\n' ) {
        this.yytext += '\n'; 
        this.offset++;
      }
      if (ch === '\n' || ch === '\r') {
        this.yylloc.last_line = ++this.yylineno;
        this.yyprevcol = this.yylloc.last_column;
        this.yylloc.last_column = 0;
      } else {
        this.yylloc.last_column++;
      }
      return ch;
    },
    // revert eating specified size
    unput: function(size) {
      if (size === 1) {
        // 1 char unput (most cases)
        this.offset --;
        if (this._input[this.offset] === '\n' && this._input[this.offset - 1] === '\r') {
          this.offset --;
          size ++;
        }
        if (this._input[this.offset] === '\r' || this._input[this.offset] === '\n') {
          this.yylloc.last_line --;
          this.yylineno --;
          this.yylloc.last_column = this.yyprevcol;
        }
        this.yytext = this.yytext.substring(0, this.yytext.length - size);
      } else if (size > 0) {
        this.offset -= size;
        var firstChar = this._input[this.offset];
        if (firstChar === '\n' || this._input[this.offset - 1] === '\r') {
          // adds 1 more char for unresolved windows returns
          this.offset --;
          size ++;
        }
        if (size < this.yytext.length) {
          this.yytext = this.yytext.substring(0, this.yytext.length - size);
          // re-calculate position
          this.yylloc.last_line = this.yylloc.first_line;
          this.yylloc.last_col = this.yyprevcol = this.yylloc.first_col;
          for(var i = 0; i < this.yytext.length; i++) {
            var c = this.yytext[i];
            if (c === '\r') {
              c = this.yytext[++i];
              this.yyprevcol = this.yylloc.last_col;
              this.yylloc.last_line ++;
              this.yylloc.last_col = 0;
              if (c !== '\n') {
                if (c === '\r') {
                  this.yylloc.last_line ++;
                } else {
                  this.yylloc.last_col ++;
                }
              }
            } else if (c === '\n') {
              this.yyprevcol = this.yylloc.last_col;
              this.yylloc.last_line ++;
              this.yylloc.last_col = 0;
            } else {
              this.yylloc.last_col ++;
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
    },
    // check if the text matches
    tryMatch: function(text) {
      return text === this.ahead(text.length);
    },
    // look ahead
    ahead: function(size) {
      var text = this._input.substring(this.offset, this.offset + size);
      if (text[text.length - 1] === '\r' && this._input[this.offset + size + 1] === '\n') {
        text += '\n';
      }
      return text;
    },
    // consume the specified size
    consume: function(size) {
      for(var i = 0; i < size; i++) {
        var ch = this._input[this.offset];
        if (!ch) break;
        this.yytext += ch;
        this.offset ++;
        if ( ch === '\r' && this._input[this.offset] === '\n' ) {
          this.yytext += '\n'; 
          this.offset++;
          i++;
        }
        if (ch === '\n' || ch === '\r') {
          this.yylloc.last_line = ++this.yylineno;
          this.yyprevcol = this.yylloc.last_column;
          this.yylloc.last_column = 0;
        } else {
          this.yylloc.last_column++;
        }
      }
      return this;
    },
    /**
     * Gets the current state
     */
    getState: function() {
      return {
        yytext: this.yytext,
        offset: this.offset,
        yylineno: this.yylineno,
        yyprevcol: this.yyprevcol,
        yylloc: {
          first_line: this.yylloc.first_line,
          first_column: this.yylloc.first_column,
          last_line: this.yylloc.last_line,
          last_column: this.yylloc.last_column
        }
      };
    },
    /**
     * Sets the current lexer state
     */
    setState: function(state) {
      this.yytext = state.yytext;
      this.offset = state.offset;
      this.yylineno = state.yylineno;
      this.yyprevcol = state.yyprevcol;
      this.yylloc = state.yylloc;
      return this;
    },
    
    // prepend next token
    appendToken: function(value, ahead) {
      this.tokens.push([value, ahead]);
      return this;
    },
    // return next match that has a token
    lex: function() {
      var token = this.next() || this.lex();
      if (!this.all_tokens) {
        while(
          token === tokens.T_WHITESPACE      // ignore white space
          || (
            !this.comment_tokens && (
              token === tokens.T_COMMENT      // ignore single lines comments
              || token === tokens.T_DOC_COMMENT  // ignore doc comments
            )
          )
          || (
            !this.mode_eval // ignore open/close tags
            && token === tokens.T_OPEN_TAG
            //  || token === tokens.T_CLOSE_TAG
            //  )
          )
        ) {
          token = this.next() || this.lex();
        }
        if (!this.mode_eval && token == tokens.T_OPEN_TAG_WITH_ECHO) {
          // open tag with echo statement
          return tokens.T_ECHO; 
        }
      }
      return token;
    },
    // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
    begin: function(condition) {
      this.conditionStack.push(condition);
      this.curCondition = condition;
      this.stateCb = this['match' + condition];
      if (typeof this.stateCb !== 'function') {
        throw new Error('Undefined condition state "'+condition+'"');
      }
      return this;
    },
    // pop the previously active lexer condition state off the condition stack
    popState: function() {
      var n = this.conditionStack.length - 1;
      var condition = (n > 0) ? this.conditionStack.pop() : this.conditionStack[0];
      this.curCondition = this.conditionStack[this.conditionStack.length - 1];
      this.stateCb = this['match' + this.curCondition];
      if (typeof this.stateCb !== 'function') {
        throw new Error('Undefined condition state "'+this.curCondition+'"');
      }
      return condition;
    },
    // return next match in input
    next: function () {
      var token;
      if (!this._input) {
        this.done = true;
      }
      if (this.done) {
        return this.EOF;
      }
      this.yylloc.first_line = this.yylloc.last_line;
      this.yylloc.first_column = this.yylloc.last_column;
      this.yytext = '';
      if (this.tokens.length > 0) {
        token = this.tokens.shift();
        if (typeof token[1] === 'object') {
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
      return token;
    },
  };
  
  // extends the lexer with states
  [
    require('./lexer/comments.js')(api, tokens),
    require('./lexer/initial.js')(api, tokens),
    require('./lexer/numbers.js')(api, tokens),
    require('./lexer/property.js')(api, tokens),
    require('./lexer/scripting.js')(api, tokens),
    require('./lexer/strings.js')(api, tokens),
    require('./lexer/tokens.js')(api, tokens),
    require('./lexer/utils.js')(api, tokens)
  ].forEach(function (ext) {
    for(var k in ext) {
      api[k] = ext[k];
    }
  });
  
  return api;
};
