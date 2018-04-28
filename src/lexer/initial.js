/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  nextINITIAL: function() {
    if (
      this.conditionStack.length > 1 &&
      this.conditionStack[this.conditionStack.length - 1] === "INITIAL"
    ) {
      // Return to HEREDOC/ST_DOUBLE_QUOTES mode
      this.popState();
    } else {
      this.begin("ST_IN_SCRIPTING");
    }
    return this;
  },
  matchINITIAL: function() {
    while (this.offset < this.size) {
      let ch = this.input();
      if (ch == "<") {
        ch = this.ahead(1);
        if (ch == "?") {
          if (this.tryMatch("?=")) {
            this.unput(1)
              .appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3)
              .nextINITIAL();
            break;
          } else if (this.tryMatchCaseless("?php")) {
            ch = this._input[this.offset + 4];
            if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
              this.unput(1)
                .appendToken(this.tok.T_OPEN_TAG, 6)
                .nextINITIAL();
              break;
            }
          }
          if (this.short_tags) {
            this.unput(1)
              .appendToken(this.tok.T_OPEN_TAG, 2)
              .nextINITIAL();
            break;
          }
        } else if (this.asp_tags && ch == "%") {
          if (this.tryMatch("%=")) {
            this.aspTagMode = true;
            this.unput(1)
              .appendToken(this.tok.T_OPEN_TAG_WITH_ECHO, 3)
              .nextINITIAL();
            break;
          } else {
            this.aspTagMode = true;
            this.unput(1)
              .appendToken(this.tok.T_OPEN_TAG, 2)
              .nextINITIAL();
            break;
          }
        }
      }
    }
    if (this.yytext.length > 0) {
      return this.tok.T_INLINE_HTML;
    } else {
      return false;
    }
  }
};
