/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const tokens = ";:,.\\[]()|^&+-/*=%!~$<>?@";

module.exports = {
  // check if the char can be a numeric
  is_NUM: function() {
    const ch = this._input.charCodeAt(this.offset - 1);
    return ch > 47 && ch < 58;
  },

  // check if current char can be a label
  is_LABEL: function() {
    const ch = this._input.charCodeAt(this.offset - 1);
    return (
      (ch > 96 && ch < 123) ||
      (ch > 64 && ch < 91) ||
      ch === 95 ||
      (ch > 47 && ch < 58) ||
      ch > 126
    );
  },

  // check if current char can be a label
  is_LABEL_START: function() {
    const ch = this._input.charCodeAt(this.offset - 1);
    return (
      (ch > 96 && ch < 123) || (ch > 64 && ch < 91) || ch === 95 || ch > 126
    );
  },

  // reads each char of the label
  consume_LABEL: function() {
    while (this.offset < this.size) {
      const ch = this.input();
      if (!this.is_LABEL()) {
        if (ch) this.unput(1);
        break;
      }
    }
    return this;
  },

  // check if current char is a token char
  is_TOKEN: function() {
    const ch = this._input[this.offset - 1];
    return tokens.indexOf(ch) !== -1;
  },
  // check if current char is a whitespace
  is_WHITESPACE: function() {
    const ch = this._input[this.offset - 1];
    return ch === " " || ch === "\t" || ch === "\n" || ch === "\r";
  },
  // check if current char is a whitespace (without newlines)
  is_TABSPACE: function() {
    const ch = this._input[this.offset - 1];
    return ch === " " || ch === "\t";
  },
  // consume all whitespaces (excluding newlines)
  consume_TABSPACE: function() {
    while (this.offset < this.size) {
      const ch = this.input();
      if (!this.is_TABSPACE()) {
        if (ch) this.unput(1);
        break;
      }
    }
    return this;
  },
  // check if current char can be a hexadecimal number
  is_HEX: function() {
    const ch = this._input.charCodeAt(this.offset - 1);
    return (
      (ch > 47 && ch < 58) || (ch > 64 && ch < 71) || (ch > 96 && ch < 103)
    );
  }
};
