/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
 var tokens = ';:,.\\[]()|^&+-/*=%!~$<>?@';

module.exports = {

  // check if the char can be a numeric
  is_NUM: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return ch > 47 && ch < 58;
  },

  // check if current char can be a label
  is_LABEL: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 96 && ch < 123)
      || (ch > 64 && ch < 91)
      || ch === 95
      || (ch > 47 && ch < 58)
      || ch > 126
    ;
  },

  // check if current char can be a label
  is_LABEL_START: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 96 && ch < 123)
      || (ch > 64 && ch < 91)
      || ch === 95
      || (ch > 126)
    ;
  },


  // reads each char of the label
  consume_LABEL: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_LABEL()) {
        this.unput(1);
        break;
      }
    }
    return this;
  },

  // check if current char is a token char
  is_TOKEN: function() {
    var ch = this._input[this.offset - 1];
    return tokens.indexOf(ch) !== -1;
  },
  // check if current char is a whitespace
  is_WHITESPACE: function() {
    var ch = this._input[this.offset - 1];
    return ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r';
  },
  // check if current char is a whitespace (without newlines)
  is_TABSPACE: function() {
    var ch = this._input[this.offset - 1];
    return ch === ' ' || ch === '\t';
  },
  // consume all whitespaces (excluding newlines)
  consume_TABSPACE: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_TABSPACE()) {
        this.unput(1);
        break;
      }
    }
    return this;
  },
  // check if current char can be a hexadecimal number
  is_HEX: function() {
    var ch = this._input.charCodeAt(this.offset - 1);
    return (ch > 47 && ch < 58) || (ch > 64 && ch < 71) || (ch > 96 && ch < 103);
  }
};
