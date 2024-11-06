/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  attributeIndex: 0,
  attributeListDepth: {},
  matchST_ATTRIBUTE: function () {
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
        if (this.attributeListDepth[this.attributeIndex] === 0) {
          delete this.attributeListDepth[this.attributeIndex];
          this.attributeIndex--;
          this.popState();
        } else {
          /* istanbul ignore next */
          this.attributeListDepth[this.attributeIndex]--;
        }
        return "]";
      case "(":
      case ")":
      case ":":
      case "=":
      case "|":
      case "&":
      case "^":
      case "-":
      case "+":
      case "*":
      case "%":
      case "~":
      case "<":
      case ">":
      case "!":
      case ".":
        return this.consume_TOKEN();
      case "[":
        this.attributeListDepth[this.attributeIndex]++;
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
        } else {
          return this.consume_TOKEN();
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
      return this.T_STRING();
    } else if (this.is_NUM()) {
      return this.consume_NUM();
    }

    /* istanbul ignore next */
    throw new Error(
      `Bad terminal sequence "${ch}" at line ${this.yylineno} (offset ${this.offset})`,
    );
  },
};
