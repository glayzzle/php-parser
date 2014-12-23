module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     *  switch ::= T_SWITCH
     * </ebnf>
     */
    read_switch: function() {
      this.expect(tokens.T_SWITCH).next();
      // @todo
    }
  };
};