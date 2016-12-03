/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

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

module.exports = {
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
        case this.tok.T_CONSTANT_ENCAPSED_STRING:
          var value = this.text();
          value = value.substring(1, value.length - 1).replace(
            /\\[rntvef"'\\\$]/g,
            function(seq) {
              return specialChar[seq];
            }
          );
          this.next();
          if (this.token === this.tok.T_DOUBLE_COLON) {
            // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1151
            return this.read_static_getter(
              ['string', value]
            );
          } else {
            // dirrect string
            return ['string', value];
          }
        case this.tok.T_START_HEREDOC:
          return this.next().read_encapsed_string(
            this.tok.T_END_HEREDOC
          );
        case '"':
          return this.next().read_encapsed_string('"');

        // NUMERIC
        case '-':  // long
        case this.tok.T_LNUMBER:  // long
        case this.tok.T_DNUMBER:  // double
          var result = this.node('number');
          var value = this.text();
          if (this.token === '-') {
            this.next().expect([
              this.tok.T_LNUMBER, this.tok.T_DNUMBER
            ]);
            value += this.text();
          }
          this.next();
          return result(value);

        // CONSTANTS
        case this.tok.T_NS_SEPARATOR:
        case this.tok.T_STRING:
          var value = this.read_namespace_name();
          var result = ['constant', value];
          if ( this.token == this.tok.T_DOUBLE_COLON) {
            // class constant  MyClass::CONSTANT
            this.next().expect([this.tok.T_STRING, this.tok.T_CLASS]);
            result[1] = [value, this.text()];
            this.next();
          }
          // CONSTANT ARRAYS OFFSET : MYCONST[1][0]...
          while(this.token === '[') {
            result = ['offset', result, this.next().read_expr()];
            this.expect(']').next();
          }
          return result;

        // ARRAYS
        case this.tok.T_ARRAY:  // array parser
        case '[':             // short array format
          return this.read_array();
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
    if (this.token === this.tok.T_ENCAPSED_AND_WHITESPACE) {
      result = ['string', this.text()];
      this.next();
    } else if (this.token === this.tok.T_DOLLAR_OPEN_CURLY_BRACES) {
      // ebnf :
      // T_DOLLAR_OPEN_CURLY_BRACES expr '}'
      // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '}'
      // | T_DOLLAR_OPEN_CURLY_BRACES T_STRING_VARNAME '[' expr ']' '}'
      if (this.next().token === this.tok.T_STRING_VARNAME) {
        result = ['var', this.text()];
        if (this.next().token === '[') {
          result = ['offset', result, this.next().read_expr()];
          this.expect(']').next();
        }
      } else {
        result = this.read_expr();
      }
      this.expect('}').next();
    } else if (this.token === this.tok.T_CURLY_OPEN) {
      result = this.next().read_variable(false, false);
      this.expect('}').next();
    } else if (this.token === '[') {
      result = ['offset', result, this.next().read_expr()];
      this.expect(']').next();
    } else if (this.token === this.tok.T_VARIABLE) {
      result = this.read_variable(false, true);
    } else {
      this.expect([
        this.tok.T_VARIABLE,
        this.tok.T_CURLY_OPEN,
        this.tok.T_DOLLAR_OPEN_CURLY_BRACES,
        this.tok.T_ENCAPSED_AND_WHITESPACE
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
   * Constant token
   */
  ,get_magic_constant: function() {
    var result = this.node('magic');
    var name = this.text();
    this.next();
    return result(name);
  }
};
