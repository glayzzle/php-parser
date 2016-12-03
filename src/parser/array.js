/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = {
  /**
   * Parse an array
   * <ebnf>
   * array ::= T_ARRAY '(' array_pair_list ')' | '[' array_pair_list ']'
   * </ebnf>
   */
  read_array: function() {
    var expect = null;
    var items = [];
    var result = this.node('array');

    if (this.expect([this.tok.T_ARRAY, '[']).token == this.tok.T_ARRAY) {
      this.next().expect('(');
      expect = ')';
    } else {
      expect = ']';
    }
    if (this.next().token != expect) {
      while(this.token != this.EOF) {
        items.push(this.read_array_pair_list());
        if (this.token == ',') {
          this.next();
          if (this.token === expect) {
            break;
          }
        } else break;
      }
    }
    this.expect(expect).next();
    return result(items);
  },
  /**
   * Reads an array entry item
   * <ebnf>
   * array_pair_list ::= '&' w_variable | (expr (T_DOUBLE_ARROW (expr | '&' w_variable) )?)
   * </ebnf>
   */
  read_array_pair_list: function() {
    if (this.token === '&') {
      return { key: false, value: ['ref', this.next().read_variable(true)] };
    } else {
      var expr = this.read_expr();
      if (this.token === this.tok.T_DOUBLE_ARROW) {
        if (this.next().token === '&') {
          return { key: expr, value: ['ref', this.next().read_variable(true)] };
        } else {
          return { key: expr, value: this.read_expr() };
        }
      } else {
        return { key: false, value: expr };
      }
    }
  },
  /**
   * <ebnf>
   *  dim_offset ::= expr?
   * </ebnf>
   */
  read_dim_offset: function() {
    if (this.token == ']') return false;
    return this.read_expr();
  }
};
