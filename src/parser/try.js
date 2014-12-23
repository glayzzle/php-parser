module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  try ::= T_TRY
     * </ebnf>
     */
    read_try: function() {
      this.expect(tokens.T_TRY).next();
      // @todo
    }
  };
};