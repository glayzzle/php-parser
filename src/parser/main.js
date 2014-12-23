module.exports = function(api, tokens, EOF) {
  return {
    /**
     * <ebnf>
     * start ::= (namespace | top_statement)*
     * </ebnf>
     */
    read_start: function() {
      if (this.token == tokens.T_NAMESPACE) {
        return this.read_namespace();
      } else {
        return this.read_top_statement();
      }
    }
  };
};