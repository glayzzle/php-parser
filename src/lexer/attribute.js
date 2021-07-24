/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  matchST_ATTRIBUTE: function () {
    let listDepth = 0;
    let ch = this.input();
    if (this.is_WHITESPACE()) {
      do {
        ch = this.input();
      } while (this.is_WHITESPACE());
      this.unput(1);
      return null;
    }
    switch (ch) {
      case "]":
        if (listDepth === 0) {
          this.popState();
        } else {
          listDepth--;
        }
        return "]";
      case "(":
      case ")":
      case ":":
      case "=":
        return this.consume_TOKEN();
      case "[":
        listDepth++;
        return "[";
      case ",":
        return ",";
      case '"':
        return this.ST_DOUBLE_QUOTES();
      case "'":
        return this.T_CONSTANT_ENCAPSED_STRING();
      case "/":
        if (this._input[this.offset] === "/") {
          return this.T_COMMENT();
        } else if (this._input[this.offset] === "*") {
          this.input();
          return this.T_DOC_COMMENT();
        }
    }
    if (this.is_LABEL_START() || ch === "\\") {
      while (this.offset < this.size) {
        const ch = this.input();
        if (!(this.is_LABEL() || ch === "\\")) {
          if (ch) this.unput(1);
          break;
        }
      }
      return this.tok.T_STRING;
    } else if (this.is_NUM()) {
      return this.consume_NUM();
    }

    throw new Error(
      `Bad terminal sequence "${ch}" at line ${this.yylineno} (offset ${this.offset})`
    );
  },
};
