/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  matchST_ATTRIBUTE: function () {
    const ch = this.input();
    // console.log("Char:", ch);
    if (this.is_LABEL_START()) {
      this.consume_LABEL();
      return this.tok.T_STRING;
    }

    if (ch === "]") {
      this.popState();
      return "]";
    } else if (ch === "(") {
      return this.consume_TOKEN();
      // return "(";
    } else if (ch === ":") {
      return this.consume_TOKEN();
    } else if (ch === ")") {
      return this.consume_TOKEN();
    } else if (ch === ",") {
      return ch;
    } else if (ch === '"') {
      return this.ST_DOUBLE_QUOTES();
    } else if (ch === "'") {
      return this.T_CONSTANT_ENCAPSED_STRING();
    } else if (this.is_NUM()) {
      return this.consume_NUM();
    } else if (this.is_TABSPACE()) {
      return this.consume_TABSPACE();
    }

    throw new Error("what now?");
  },
};
