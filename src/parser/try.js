/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = function(api, tokens, EOF) {
  return {
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
      this.expect(tokens.T_TRY).next();

      var code = this.read_statement();
      var allways = false;
      var catches = [];

      while(this.token === tokens.T_CATCH) {
        this.next().expect('(').next();
        var exName = this.read_namespace_name();
        var varName = this.read_variable(true);
        this.expect(')').next();
        catches.push({
          exception: exName,
          as: varName,
          body: this.read_statement()
        });
      }
      if (this.token === tokens.T_FINALLY) {
        allways = this.next().read_statement();
      }
      return ['try', code, catches, allways];
    }
  };
};