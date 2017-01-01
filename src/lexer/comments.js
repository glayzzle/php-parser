/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

"use strict";

module.exports = {
  /**
   * Reads a single line comment
   * @see
   */
  T_COMMENT: function() {
    while(this.offset < this.size) {
      var ch = this.input();
      if (ch === '\n' || ch === '\r') {
        return this.tok.T_COMMENT;
      } else if (ch === '?' && !this.aspTagMode && this._input[this.offset] === '>') {
        this.unput(1);
        return this.tok.T_COMMENT;
      } else if (ch === '%' && this.aspTagMode && this._input[this.offset] === '>') {
        this.unput(1);
        return this.tok.T_COMMENT;
      }
    }
    return this.tok.T_COMMENT;
  },
  /**
   * Behaviour : https://github.com/php/php-src/blob/master/Zend/zend_language_scanner.l#L1927
   */
  T_DOC_COMMENT: function() {
    var ch = this.input();
    var token = this.tok.T_COMMENT;
    if (ch === '*') { // started with '/*' , check is next is '*'
      ch = this.input();
      if (this.is_WHITESPACE()) { // check if next is WHITESPACE
        token = this.tok.T_DOC_COMMENT;
      }
      if (ch === '/') {
        return token;
      } else {
        this.unput(1); // reset
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
