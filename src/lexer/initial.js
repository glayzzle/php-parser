/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(lexer, tokens) {
  return {
    matchINITIAL: function() {
      while(this.offset < this.size) {
        var ch = this.input();
        if (ch == '<') {
          ch = this.ahead(1);
          if (ch == '?') {
            if (this.tryMatch('?=')) {
              this.unput(1).appendToken(tokens.T_OPEN_TAG_WITH_ECHO, 3).begin("ST_IN_SCRIPTING");
              break;
            } else if (this.tryMatch('?php')) {
              ch = this._input[this.offset + 4];
              if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
                this.unput(1).appendToken(tokens.T_OPEN_TAG, 6).begin("ST_IN_SCRIPTING");
                break;
              }
            } else if (this.short_tags) {
              this.unput(1).appendToken(tokens.T_OPEN_TAG, 2).begin("ST_IN_SCRIPTING");
              break;
            }
          } else if(this.asp_tags && ch == '%') {
            if (this.tryMatch('%=')) {
              this.aspTagMode = true;
              this.unput(1).appendToken(tokens.T_OPEN_TAG_WITH_ECHO, 3).begin("ST_IN_SCRIPTING");
              break;
            } else {
              this.aspTagMode = true;
              this.unput(1).appendToken(tokens.T_OPEN_TAG, 2).begin("ST_IN_SCRIPTING");
              break;
            }
          }
        }
      }
      if (this.yytext.length > 0) {
        return tokens.T_INLINE_HTML;
      } else {
        return false;
      }
    }
  };
};