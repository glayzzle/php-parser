/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

"use strict";

/* istanbul ignore else  */
let MAX_LENGTH_OF_LONG = 10;
let long_min_digits = "2147483648";
if (process.arch == "x64") {
  MAX_LENGTH_OF_LONG = 19;
  long_min_digits = "9223372036854775808";
}

module.exports = {
  consume_NUM: function() {
    let ch = this.yytext[0];
    let hasPoint = this.yytext[0] === ".";
    if (ch === "0") {
      ch = this.input();
      // check if hexa
      if (ch === "x" || ch === "X") {
        ch = this.input();
        if (this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
      } else if (ch === "b" || ch === "B") {
        ch = this.input();
        if (ch === "0" || ch === "1") {
          return this.consume_BNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
      } else if (!this.is_NUM()) {
        if (ch) this.unput(1);
      }
    }

    while (this.offset < this.size) {
      ch = this.input();
      if (!this.is_NUM()) {
        if (ch === "." && !hasPoint) {
          hasPoint = true;
        } else if (ch === "e" || ch === "E") {
          ch = this.input();
          if (ch === "+" || ch === "-") {
            ch = this.input();
            if (this.is_NUM()) {
              this.consume_LNUM();
              return this.tok.T_DNUMBER;
            } else {
              this.unput(ch ? 3 : 2);
              break;
            }
          } else if (this.is_NUM()) {
            this.consume_LNUM();
            return this.tok.T_DNUMBER;
          } else {
            this.unput(ch ? 2 : 1);
            break;
          }
        } else {
          if (ch) this.unput(1);
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
        this.yytext.length < MAX_LENGTH_OF_LONG ||
        (this.yytext.length == MAX_LENGTH_OF_LONG &&
          this.yytext < long_min_digits)
      ) {
        return this.tok.T_LNUMBER;
      }
      return this.tok.T_DNUMBER;
    }
  },
  // read hexa
  consume_HNUM: function() {
    while (this.offset < this.size) {
      const ch = this.input();
      if (!this.is_HEX()) {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read a generic number
  consume_LNUM: function() {
    while (this.offset < this.size) {
      const ch = this.input();
      if (!this.is_NUM()) {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
  // read binary
  consume_BNUM: function() {
    let ch;
    while (this.offset < this.size) {
      ch = this.input();
      if (ch !== "0" && ch !== "1") {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  }
};
