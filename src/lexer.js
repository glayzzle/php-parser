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
    // enables the evald mode (ignore opening tags)
    mode_eval: false,
    // disables by default asp tags mode
    asp_tags: false,
    // enables by default short tags mode
    short_tags: true,
    // initialize the lexer with the specified input
    setInput: function(input) {
      this._input = input;
      this.size = input.length;
      this.yylineno = 0;
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
        this.yylineno++;
        this.yylloc.last_line++;
        // buffers previous column position 
        // (assumes we never unput multiple line breaks)
        this.yyprevcol = this.yylloc.last_column;
        this.yylloc.last_column = 0;
      } else {
        this.yylloc.last_column++;
      }
      return ch;
    },
    // revert eating specified size
    unput: function(size) {
      var firstChar = this._input[this.offset - size];
      if (firstChar === '\n' || firstChar === '\r') {
        if (this._input[this.offset - size - 1] === '\r') {
          // adds 1 more char for windows returns
          size ++;
        }
        // we assume we never unput text like that : "foo\nbar" or "\n\n"
        this.yylloc.last_line --;
        this.yylloc.last_column = this.yyprevcol;
      }
      
      this.offset -= size;
      this.yytext = this.yytext.substring(0, this.yytext.length - size);
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
      for(var i = 0; i < size; i++) this.input();
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
          || token === tokens.T_COMMENT      // ignore single lines comments
          || token === tokens.T_DOC_COMMENT  // ignore doc comments
          || (
            !this.mode_eval // ignore open/close tags
            && (
              token === tokens.T_OPEN_TAG
              || token === tokens.T_CLOSE_TAG
            )
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
      // console.log(this.yylineno, '->' + condition);
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
      // console.log(this.yylineno, '<-' + this.curCondition);
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
        this.consume(token[1]);
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
  fs.readdirSync(__dirname + '/lexer').forEach(function(file) {
    if (file.indexOf('.js', file.length - 3) !== -1) {
      var ext = require(__dirname + '/lexer/' + file)(api, tokens);
      for(var k in ext) {
        api[k] = ext[k];
      }
    }
  });
  
  return api;
};