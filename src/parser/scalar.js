module.exports = function(api, tokens, EOF) {
  return {
    /**
     * @todo reading a scalar value
     */
    read_scalar: function() {
      if (this.is('T_MAGIC_CONST')) {
        return this.get_magic_constant();
      } else {
        switch(this.token) {
          // texts
          case tokens.T_CONSTANT_ENCAPSED_STRING:
            var value = this.text();
            this.next();
            return ['string', value];
          case tokens.T_START_HEREDOC:
            var value = '';
            if (this.next().token == tokens.T_ENCAPSED_AND_WHITESPACE) {
              value = this.text();
              this.next();
            }
            this.expect(tokens.T_END_HEREDOC).next();
            return ['string', value];
          // NUMERIC
          case tokens.T_LNUMBER:  // long
          case tokens.T_DNUMBER:  // double
            var value = this.text();
            this.next();
            return ['number', value];
          case tokens.T_STRING:  // CONSTANTS
            var value = this.text();
            if ( this.next().token == tokens.T_DOUBLE_COLON) {
              // class constant
              this.next().expect(tokens.T_STRING);
              value = [value, this.text()];
              this.next();
            }
            return ['const', value];
          case tokens.T_ARRAY:  // array parser
          case '[':             // short array format
            return this.read_array(false);
          default:
            this.error('T_SCALAR');
        }
      }
    }
    /**
     * Parse an array
     */
    ,read_array: function(vars) {
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
    }
    /**
     * Converts the constant token to it's scallar value
     */
    ,get_magic_constant: function(token) {
      return ['string', '@todo'];
    }
  };
};