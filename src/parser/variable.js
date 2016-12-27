/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
module.exports = {
  /**
   * Reads a variable
   *
   * ```ebnf
   *   variable ::= ...complex @todo
   * ```
   *
   * Some samples of parsed code :
   * ```php
   *  $var                      // simple var
   *  classname::CONST_NAME     // dynamic class name with const retrieval
   *  foo()                     // function call
   *  $var->func()->property    // chained calls
   * ```
   */
  read_variable: function(read_only, encapsed, byref) {
    var result;

    // reads the entry point
    if (this.is([this.tok.T_VARIABLE, '$'])) {
      result = this.read_reference_variable(encapsed, byref);
    } else if (this.is([this.tok.T_NS_SEPARATOR, this.tok.T_STRING])) {
      result = this.node();
      var name = this.read_namespace_name();
      if (
        this.token != this.tok.T_DOUBLE_COLON
        && this.token != '('
      ) {
        // @see parser.js line 130 : resolves a conflict with scalar
        var literal = name.name.toLowerCase();
        if (literal === 'true') {
          result = result('boolean', true);
        } else if (literal === 'false') {
          result = result('boolean', false);
        } else {
          // @todo null keyword ?
          result = ['constant', name];
        }
      } else {
        result = name;
      }
    } else if (this.token === this.tok.T_STATIC) {
      this.next();
      result = ['ns', ['static']];
    } else {
      this.expect('VARIABLE');
    }

    // static mode
    if (this.token === this.tok.T_DOUBLE_COLON) {
      result = this.read_static_getter(result, encapsed);
    }

    return this.recursive_variable_chain_scan(result, read_only, encapsed);
  }

  // resolves a static call
  ,read_static_getter: function(from, encapsed) {
    var getter = null;
    if (this.next().is([this.tok.T_VARIABLE, '$'])) {
      getter = this.read_reference_variable(encapsed, false);
    } else if (
      this.token === this.tok.T_STRING
      || this.token === this.tok.T_CLASS
    ) {
      getter = this.text();
      this.next();
    } else {
      getter = this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
      // graceful mode : set getter as error node and continue
      this.next();
    }
    if (from[0] != 'ns') {
      from = ['lookup', 'class', from];
    }
    return ['static', 'get', from, getter];
  }

  ,recursive_variable_chain_scan: function(result, read_only, encapsed) {
    recursive_scan_loop:
    while(this.token != this.EOF) {
      switch(this.token) {
        case '(':
          if (read_only) {
            return result;
          } else {
            result = ['call', result,  this.read_function_argument_list()];
          }
          break;
        case '[':
          this.next();
          var offset = false;
          if (encapsed) {
            offset = this.read_encaps_var_offset();
            this.expect(']').next();
          } else {
            // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
            if (this.token !== ']') {
              offset = this.read_expr();
              this.expect(']').next();
            } else {
              this.next();
            }
          }
          result = ['offset', result, offset];
          break;
        case this.tok.T_OBJECT_OPERATOR:
          var what;
          switch(this.next().token) {
            case this.tok.T_STRING:
              what = ['string', this.text()];
              var tok = this.next().token;
              if (tok === this.tok.T_VARIABLE) {
                // fix $obj->var_$prop
                what = ['bin', '.', what, ['var', this.text()]];
              } else if (tok === '{') {
                // fix $obj->var_{$prop}
                what = ['bin', '.', what, this.next().read_expr()];
                this.expect('}').next();
              }
              break;
            case this.tok.T_VARIABLE:
              what = ['var', this.text()];
              this.next();
              break;
            case '$':

              this.next().expect(['{', this.tok.T_VARIABLE]);
              if (this.token === '{') {
                // $obj->${$varname}
                what = this.next().read_expr();
                this.expect('}').next();
              } else {
                // $obj->$$varname
                what = this.read_expr();
              }
              break;
            case '{':
              what = this.next().read_expr();
              this.expect('}').next();
              break;
            default:
              what = this.error([this.tok.T_STRING, this.tok.T_VARIABLE]);
              // graceful mode : set what as error mode & continue
              this.next();
              break;
          }
          result = ['prop', result, what];
          break;
        default:
          break recursive_scan_loop;
      }
    }
    return result;
  }
  /**
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  ,read_encaps_var_offset: function() {
    var offset = this.node();
    if (this.token === this.tok.T_STRING) {
      var text = this.text();
      var isDblQuote = text[0] === '"';
      text = text.substring(1, text.length - 1);
      offset = offset(
        'string', isDblQuote, this.resolve_special_chars(text)
      );
    } else if (this.token === this.tok.T_NUM_STRING) {
      offset = offset('number', this.text());
    } else if (this.token === this.tok.T_VARIABLE) {
      offset = offset('variable', this.text());
    } else {
      this.expect([
        this.tok.T_STRING,
        this.tok.T_NUM_STRING,
        this.tok.T_VARIABLE
      ]);
    }
    this.next();
    return offset;
  }
  /**
   * ```ebnf
   *  reference_variable ::=  simple_variable ('[' OFFSET ']')* | '{' EXPR '}'
   * ```
   * <code>
   *  $foo[123];      // foo is an array ==> gets its entry
   *  $foo{1};        // foo is a string ==> get the 2nd char offset
   *  ${'foo'}[123];  // get the dynamic var $foo
   *  $foo[123]{1};   // gets the 2nd char from the 123 array entry
   * </code>
   */
  ,read_reference_variable: function(encapsed, byref) {
    var result = this.read_simple_variable(byref);
    while(this.token != this.EOF) {
      if (this.token == '[') {
        if (encapsed) {
          result = this.next().read_encaps_var_offset();
        } else {
          var offset = this.next().token === ']' ? null : this.read_dim_offset();
          result = ['offset', result, offset];
        }
        this.expect(']').next();
      } else if (this.token == '{' && !encapsed) {
        result = ['offset', result, this.next().read_expr()];
        this.expect('}').next();
      } else break;
    }
    return result;
  }
  /**
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  ,read_simple_variable: function(byref) {
    var result = this.node('variable');
    if (this.expect([this.tok.T_VARIABLE, '$']).token === this.tok.T_VARIABLE) {
      // plain variable name
      result = result(this.text(), byref);
      this.next();
    } else {
      // dynamic variable name
      switch(this.next().token) {
        case '{':
          result = this.next().read_expr();
          this.expect('}').next();
          break;
        case '$': // $$$var
          result = ['lookup', 'var', this.read_simple_variable(false)];
          break;
        case this.tok.T_VARIABLE: // $$var
          result = ['var', this.text()];
          this.next();
          break;
        default:
          result = this.error(['{', '$', this.tok.T_VARIABLE]);
          // graceful mode
          this.next();
      }
      result = ['lookup', 'var', result];
    }
    return result;
  }
};
