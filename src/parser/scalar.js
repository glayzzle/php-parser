/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

module.exports = function(api, tokens, EOF) {
  var specialChar = {
    '\\r': "\r",
    '\\n': "\n",
    '\\t': "\t",
    '\\v': String.fromCharCode(11),
    '\\e': String.fromCharCode(27),
    '\\f': String.fromCharCode(12),
    "\\\\": "\\",
    '\\$': "$",
    '\\"': '"',
    '\\\'': "'"
  };
  return {
    /**
     * <ebnf>
     *  scalar ::= T_MAGIC_CONST 
     *       | T_LNUMBER | T_DNUMBER 
     *       | T_START_HEREDOC T_ENCAPSED_AND_WHITESPACE? T_END_HEREDOC 
     *       | '"' encaps_list '"'
     *       | T_START_HEREDOC encaps_list T_END_HEREDOC
     *       | namespace_name (T_DOUBLE_COLON T_STRING)?
     * </ebnf>
     */
    read_scalar: function() {
      if (this.is('T_MAGIC_CONST')) {
        return this.get_magic_constant();
      } else {
        switch(this.token) {
          
          // TEXTS
          case tokens.T_CONSTANT_ENCAPSED_STRING:
            var value = this.text();
            this.next();
            return [
              'string', 
              value
                .substring(1, value.length - 1)
                .replace(/\\[rntvef"'\\\$]/g, function(seq) {
                  return specialChar[seq];
                })
            ];
          case tokens.T_START_HEREDOC:
            return this.next().read_encapsed_string(
              tokens.T_END_HEREDOC
            );
          case '"':
            return this.next().read_encapsed_string('"');

          // NUMERIC
          case '-':  // long
          case tokens.T_LNUMBER:  // long
          case tokens.T_DNUMBER:  // double
            var sign = 1;
            if (this.token === '-') {
              sign = -1;
              this.next().expect([
                tokens.T_LNUMBER, tokens.T_DNUMBER
              ]);
            }
            var value = parseFloat(this.text());
            this.next();
            return ['number', value * sign];
          
          // CONSTANTS
          case tokens.T_NS_SEPARATOR:
          case tokens.T_STRING:
            var value = this.read_namespace_name();
            if ( this.token == tokens.T_DOUBLE_COLON) {
              // class constant
              this.next().expect(tokens.T_STRING);
              value = [value, this.text()];
              this.next();
            }
            return ['const', value];
          
          // ARRAYS
          case tokens.T_ARRAY:  // array parser
          case '[':             // short array format
            return this.read_array(false);
          default:
            this.error('SCALAR');
        }
      }
    }
    /**
     * <ebnf>
     * encapsed_string_item ::= T_ENCAPSED_AND_WHITESPACE | T_DOLLAR_OPEN_CURLY_BRACES ... | variable  | T_CURLY_OPEN variable '}'
     * </ebnf>
     */
    ,read_encapsed_string_item: function() {
      var result = null;
      if (this.token === tokens.T_ENCAPSED_AND_WHITESPACE) {
        result = ['string', this.text()];
        this.next();
      } else if (this.token === tokens.T_DOLLAR_OPEN_CURLY_BRACES) {
        // ebnf :
        // T_DOLLAR_OPEN_CURLY_BRACES expr '}'
        // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
        // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
        if (this.next().token === tokens.T_STRING_VARNAME) {
          result = ['var', this.text()];
          if (this.next().token === '[') {
            result = ['offset', result, this.next().read_expr()];
            this.expect(']').next();
          }
        } else {
          result = this.next().read_expr();
        }
        this.expect('}').next();
      } else if (this.token === tokens.T_CURLY_OPEN) {
        result = this.next().read_variable(false, false);
        this.expect('}').next();
      } else if (this.token === tokens.T_VARIABLE) {
        result = this.read_variable(false, true);
      } else {
        this.expect([
          tokens.T_VARIABLE,
          tokens.T_CURLY_OPEN,
          tokens.T_DOLLAR_OPEN_CURLY_BRACES,
          tokens.T_ENCAPSED_AND_WHITESPACE
        ])
      }
      return result;
    }
    /**
     * Reads an encapsed string
     */
    ,read_encapsed_string: function(expect) {
      if (this.token === expect) {
        this.next();
        return null; // empty
      }      
      var first = this.read_encapsed_string_item();
      if (this.token === expect) {
        this.next();
        return first;
      }
      var result = [
        'bin', '.'
        , first
        , this.read_encapsed_string_item()
      ];
      while(this.token !== expect) {
        result[3] = [
          'bin', '.', result[3], this.read_encapsed_string_item()
        ];
      }
      this.expect(expect).next();
      return result;
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