/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * ```ebnf
   *  try ::= T_TRY '{' inner_statement* '}'
   *          (
   *              T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}'
   *          )*
   *          (T_FINALLY '{' inner_statement* '}')?
   * ```
   * @see https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L448
   * @return {Try}
   */
  read_try: function() {
    this.expect(this.tok.T_TRY);
    var result = this.node('try'),
      always = null,
      body,
      catches = []
    ;
    body = this.next().read_statement();
    // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L455
    while(this.ignoreComments().token === this.tok.T_CATCH) {
      var item = this.node('catch'), what = [], variable = null;
      this.next().expect('(') && this.next();
      what = this.read_list(
        this.read_namespace_name, '|', false
      );
      variable = this.read_variable(true, false, false);
      this.expect(')');
      catches.push(
        item(this.next().read_statement(), what, variable)
      );
    }
    if (this.token === this.tok.T_FINALLY) {
      always = this.next().read_statement();
    }
    return result(body, catches, always);
  }
};
