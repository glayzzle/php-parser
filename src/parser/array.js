/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
const ArrayExpr = "array";
const ArrayEntry = "entry";

module.exports = {
  /**
   * Parse an array
   * ```ebnf
   * array ::= T_ARRAY '(' array_pair_list ')' |
   *   '[' array_pair_list ']'
   * ```
   */
  read_array: function() {
    let expect = null;
    let shortForm = false;
    const items = [];
    const result = this.node(ArrayExpr);

    if (this.token === this.tok.T_ARRAY) {
      this.next().expect("(");
      expect = ")";
    } else {
      shortForm = true;
      expect = "]";
    }

    if (this.next().token != expect) {
      while (this.token != this.EOF) {
        items.push(this.read_array_pair_list());
        if (this.token == ",") {
          this.next();
          if (this.token === expect) {
            break;
          }
        } else break;
      }
    }
    this.expect(expect);
    this.next();
    return result(shortForm, items);
  },
  /**
   * Reads an array entry item
   * ```ebnf
   * array_pair_list ::= '&' w_variable |
   *  (
   *    expr (
   *      T_DOUBLE_ARROW (
   *        expr | '&' w_variable
   *      )
   *    )?
   *  )
   * ```
   */
  read_array_pair_list: function() {
    const result = this.node(ArrayEntry);
    let key = null;
    let value = null;
    if (this.token === "&") {
      value = this.next().read_variable(true, false, true);
    } else {
      const expr = this.read_expr();
      if (this.token === this.tok.T_DOUBLE_ARROW) {
        key = expr;
        if (this.next().token === "&") {
          value = this.next().read_variable(true, false, true);
        } else {
          value = this.read_expr();
        }
      } else {
        value = expr;
      }
    }
    return result(key, value);
  },
  /**
   * ```ebnf
   *  dim_offset ::= expr?
   * ```
   */
  read_dim_offset: function() {
    if (this.token == "]") return false;
    return this.read_expr();
  }
};
