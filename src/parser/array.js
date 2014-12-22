module.exports = function(api, tokens, EOF) {
  return {
    /**
     * Parse an array
     */
    read_array: function(vars) {
      var expect = null;
      var items = [];
      
      if (this.expect([tokens.T_ARRAY, '[']).token == tokens.T_ARRAY) {
        this.next().expect('(');
        expect = ')';
      } else {
        expect = ']';
      }
      if (this.next().token != expect) {
        while(this.token != EOF) {
          var entry = this.read_scalar();
          if (this.token == tokens.T_DOUBLE_ARROW) {
            items.push([entry, this.next().read_scalar()]);
          } else {
            items.push([null, entry]);
          }
          if (this.token == ',') {
            this.next();
          } else break;
        }
      }
      this.expect(expect).next();
      return ['array', items];
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
};