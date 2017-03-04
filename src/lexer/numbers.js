/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

"use strict";

/* istanbul ignore else  */
if (process.arch == 'x64') {
  var SIZEOF_LONG = 8;
  var MAX_LENGTH_OF_LONG = 19;
  var long_min_digits = "9223372036854775808";
} else {
  var SIZEOF_LONG = 4;
  var MAX_LENGTH_OF_LONG = 10;
  var long_min_digits = "2147483648";
}

module.exports = {
  consume_NUM: function() {
    var ch = this.yytext[0];
    var hasPoint = this.yytext[0] === '.';
    if (ch === '0') {
      ch = this.input();
      // check if hexa
      if (ch === 'x' || ch === 'X') {
        this.input();
        if (this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(2);
        }
      } else if (ch === 'b' || ch === 'B') {
        ch = this.input();
        if (ch === '0' || ch === '1') {
          return this.consume_BNUM();
        } else {
          this.unput(2);
        }
      } else if (!this.is_NUM()) {
        this.unput(1);
      }
    }

    while(this.offset < this.size) {
      ch = this.input();
      if (!this.is_NUM()) {
        if (ch === '.' && !hasPoint) {
          hasPoint = true;
        } else if (ch === 'e' || ch === 'E') {
          ch = this.input();
          if (ch === '+' || ch === '-') {
            ch = this.input();
            if (this.is_NUM()) {
              this.consume_LNUM();
              return this.tok.T_DNUMBER;
            } else {
              if (ch) this.unput(3);
              break;
            }
          } else if (this.is_NUM()) {
            this.consume_LNUM();
            return this.tok.T_DNUMBER;
          } else {
            if (ch) this.unput(2);
            break;
          }
        } else {
          this.unput(1);
          break;
        }
      }
    }
    if (hasPoint) {
      return this.tok.T_DNUMBER;
    } else if (this.yytext.length < MAX_LENGTH_OF_LONG - 1) {
      return this.tok.T_LNUMBER;
    } else {
      if (
        this.yytext.length < MAX_LENGTH_OF_LONG || (
          this.yytext.length == MAX_LENGTH_OF_LONG
          && this.yytext < long_min_digits
        )
      ) {
        return this.tok.T_LNUMBER;
      }
      return this.tok.T_DNUMBER;
    }
  },
  // read hexa
  consume_HNUM: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_HEX()) {
        this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read a generic number
  consume_LNUM: function() {
    while(this.offset < this.size) {
      this.input();
      if (!this.is_NUM()) {
        this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read binary
  consume_BNUM: function() {
    var ch;
    while(this.offset < this.size) {
      ch = this.input();
      if (ch !== '0' && ch !== '1') {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  }
};
