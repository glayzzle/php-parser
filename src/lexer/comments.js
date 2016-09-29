/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
    T_COMMENT: function() {
      while(this.offset < this.size) {
        var ch = this.input();
        if (ch === '\n' || ch === '\r') {
          return tokens.T_COMMENT;
        } else if (ch === '?' && !this.aspTagMode && this._input[this.offset] === '>') {
          this.unput(1);
          return tokens.T_COMMENT;
        } else if (ch === '%' && this.aspTagMode && this._input[this.offset] === '>') {
          this.unput(1);
          return tokens.T_COMMENT;
        }
      }
      return tokens.T_COMMENT;
    },
    T_DOC_COMMENT: function() {
      var ch = this.input();
      var token = tokens.T_COMMENT; 
      if (ch === '*') {
        ch = this.input();
        if (this.is_WHITESPACE()) {
          token = tokens.T_DOC_COMMENT;
        } else if (ch === '/') {
          return token;
        }
      }
      while(this.offset < this.size) {
        ch = this.input();
        if (ch === '*' && this._input[this.offset] === '/') {
          this.input();
          break;
        }
      }
      return token;
    }
  };
};