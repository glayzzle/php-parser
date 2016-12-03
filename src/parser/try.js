/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * <ebnf>
   *  try ::= T_TRY '{' inner_statement* '}'
   *          (
   *              T_CATCH '(' namespace_name variable ')' '{'  inner_statement* '}'
   *          )*
   *          (T_FINALLY '{' inner_statement* '}')?
   * </ebnf>
   */
  read_try: function() {

    // @todo implement the short form of declarations
    this.expect(this.tok.T_TRY);
    var result = this.node('try');
    var code = this.nextWithComments().read_statement();
    var allways = false;
    var catches = [];

    this.ignoreComments();
    while(this.token === this.tok.T_CATCH) {
      this.next().expect('(').next();
      var exName = this.read_namespace_name();
      var varName = this.read_variable(true);
      this.expect(')').nextWithComments();
      catches.push({
        exception: exName,
        as: varName,
        body: this.read_statement()
      });
      this.ignoreComments();
    }
    if (this.token === this.tok.T_FINALLY) {
      allways = this.nextWithComments().read_statement();
    }
    return result(code, catches, allways);
  }
};
