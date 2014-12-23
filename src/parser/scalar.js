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
            this.error('SCALAR');
        }
      }
    }
    /**
     * Converts the constant token to it's scallar value
     */
    ,get_magic_constant: function() {
      var name = this.text();
      this.next();
      return ['magic', '@todo:' + name];
    }
    /**
     * @todo
     */
    ,read_encaps_list: function() {
      return this.next().token;
    }
  };
};