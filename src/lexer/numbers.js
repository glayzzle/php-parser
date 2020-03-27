/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
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
  consume_NUM: function () {
    let ch = this.yytext[0];
    let hasPoint = ch === ".";
    if (ch === "0") {
      ch = this.input();
      // check if hexa
      if (ch === "x" || ch === "X") {
        ch = this.input();
        if (ch !== "_" && this.is_HEX()) {
          return this.consume_HNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
        // check binary notation
      } else if (ch === "b" || ch === "B") {
        ch = this.input();
        if ((ch !== "_" && ch === "0") || ch === "1") {
          return this.consume_BNUM();
        } else {
          this.unput(ch ? 2 : 1);
        }
        // @fixme check octal notation ? not usefull
      } else if (!this.is_NUM()) {
        if (ch) this.unput(1);
      }
    }

    while (this.offset < this.size) {
      const prev = ch;
      ch = this.input();

      if (ch === "_") {
        if (prev === "_") {
          // restriction : next to underscore / 1__1;
          this.unput(2); // keep 1
          break;
        }
        if (prev === ".") {
          // next to decimal point  "1._0"
          this.unput(1); // keep 1.
          break;
        }
        if (prev === "e" || prev === "E") {
          // next to e "1e_10"
          this.unput(2); // keep 1
          break;
        }
      } else if (ch === ".") {
        if (hasPoint) {
          // no multiple points "1.0.5"
          this.unput(1); // keep 1.0
          break;
        }
        if (prev === "_") {
          // next to decimal point  "1_.0"
          this.unput(2); // keep 1
          break;
        }
        hasPoint = true;
        continue;
      } else if (ch === "e" || ch === "E") {
        if (prev === "_") {
          // next to e "1_e10"
          this.unput(1);
          break;
        }
        let undo = 2;
        ch = this.input();
        if (ch === "+" || ch === "-") {
          // 1e-5
          undo = 3;
          ch = this.input();
        }
        if (this.is_NUM_START()) {
          this.consume_LNUM();
          return this.tok.T_DNUMBER;
        }
        this.unput(ch ? undo : undo - 1); // keep only 1
        break;
      }

      if (!this.is_NUM()) {
        // example : 10.0a
        if (ch) this.unput(1); // keep 10.0
        break;
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
  consume_HNUM: function () {
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
  consume_LNUM: function () {
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
  consume_BNUM: function () {
    let ch;
    while (this.offset < this.size) {
      ch = this.input();
      if (ch !== "0" && ch !== "1" && ch !== "_") {
        if (ch) this.unput(1);
        break;
      }
    }
    return this.tok.T_LNUMBER;
  },
};
