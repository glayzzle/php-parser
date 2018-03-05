/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
module.exports = {
  /**
   * Reads a variable
   *
   * ```ebnf
   *   variable ::= &? ...complex @todo
   * ```
   *
   * Some samples of parsed code :
   * ```php
   *  &$var                      // simple var
   *  $var                      // simple var
   *  classname::CONST_NAME     // dynamic class name with const retrieval
   *  foo()                     // function call
   *  $var->func()->property    // chained calls
   * ```
   */
  read_variable: function(read_only, encapsed, byref) {
    let result;

    // check the byref flag
    if (!byref && this.token === "&") {
      byref = true;
      this.next();
    }

    // reads the entry point
    if (this.is([this.tok.T_VARIABLE, "$"])) {
      result = this.read_reference_variable(encapsed, byref);
    } else if (
      this.is([
        this.tok.T_NS_SEPARATOR,
        this.tok.T_STRING,
        this.tok.T_NAMESPACE
      ])
    ) {
      result = this.node();
      const name = this.read_namespace_name();
      if (this.token != this.tok.T_DOUBLE_COLON && this.token != "(") {
        // @see parser.js line 130 : resolves a conflict with scalar
        const literal = name.name.toLowerCase();
        if (literal === "true") {
          result = result("boolean", true, name.name);
        } else if (literal === "false") {
          result = result("boolean", false, name.name);
        } else {
          // @todo null keyword ?
          result = result("constref", name);
        }
      } else {
        result = name;
      }
    } else if (this.token === this.tok.T_STATIC) {
      result = this.node("constref");
      this.next();
      result = result("static");
    } else {
      this.expect("VARIABLE");
    }

    // static mode
    if (this.token === this.tok.T_DOUBLE_COLON) {
      result = this.read_static_getter(result, encapsed);
    }

    return this.recursive_variable_chain_scan(result, read_only, encapsed);
  },

  // resolves a static call
  read_static_getter: function(what, encapsed) {
    const result = this.node("staticlookup");
    let offset, name;
    if (this.next().is([this.tok.T_VARIABLE, "$"])) {
      offset = this.read_reference_variable(encapsed, false);
    } else if (
      this.token === this.tok.T_STRING ||
      this.token === this.tok.T_CLASS ||
      (this.php7 && this.is("IDENTIFIER"))
    ) {
      offset = this.node("constref");
      name = this.text();
      this.next();
      offset = offset(name);
    } else {
      this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
      // graceful mode : set getter as error node and continue
      offset = this.node("constref");
      name = this.text();
      this.next();
      offset = offset(name);
    }
    return result(what, offset);
  },

  recursive_variable_chain_scan: function(result, read_only, encapsed) {
    let name, node, offset;
    recursive_scan_loop: while (this.token != this.EOF) {
      switch (this.token) {
        case "(":
          if (read_only) {
            // @fixme : add more informations & test
            return result;
          } else {
            result = this.node("call")(
              result,
              this.read_function_argument_list()
            );
          }
          break;
        case "[":
          node = this.node("offsetlookup");
          this.next();
          offset = false;
          if (encapsed) {
            offset = this.read_encaps_var_offset();
            this.expect("]") && this.next();
          } else {
            // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
            if (this.token !== "]") {
              offset = this.read_expr();
              this.expect("]") && this.next();
            } else {
              this.next();
            }
          }
          result = node(result, offset);
          break;
        case this.tok.T_DOUBLE_COLON:
          // @see https://github.com/glayzzle/php-parser/issues/107#issuecomment-354104574
          if (result.kind === "staticlookup") {
            this.error();
          }

          node = this.node("staticlookup");
          if (
            this.next().token === this.tok.T_STRING ||
            (this.php7 && this.is("IDENTIFIER"))
          ) {
            offset = this.node("constref");
            name = this.text();
            this.next();
            offset = offset(name);

            if (this.token === this.tok.T_OBJECT_OPERATOR) {
              this.error();
            }
          } else {
            this.error(this.tok.T_STRING);
            // fallback on a constref node
            offset = this.node("constref")(this.text());
            this.next();
          }
          result = node(result, offset);
          break;
        case this.tok.T_OBJECT_OPERATOR: {
          node = this.node("propertylookup");
          let what = null;
          switch (this.next().token) {
            case this.tok.T_STRING:
              what = this.node("constref");
              name = this.text();
              this.next();
              what = what(name);
              if (this.token === this.tok.T_VARIABLE) {
                const inner = this.node("variable");
                name = this.text().substring(1);
                this.next();
                what = this.node("encapsed")(
                  [what, inner(name, false, false)],
                  null,
                  "offset"
                );
                if (what.loc && what.value[0].loc) {
                  what.loc.start = what.value[0].loc.start;
                }
              } else if (this.token === "{") {
                const expr = this.next().read_expr();
                this.expect("}") && this.next();
                what = this.node("encapsed")([what, expr], null, "offset");
                if (what.loc && what.value[0].loc) {
                  what.loc.start = what.value[0].loc.start;
                }
              }
              break;
            case this.tok.T_VARIABLE:
              what = this.node("variable");
              name = this.text().substring(1);
              this.next();
              what = what(name, false, false);
              break;
            case "$":
              this.next().expect(["{", this.tok.T_VARIABLE]);
              if (this.token === "{") {
                // $obj->${$varname}
                what = this.next().read_expr();
                this.expect("}") && this.next();
              } else {
                // $obj->$$varname
                what = this.read_expr();
              }
              break;
            case "{":
              what = this.next().read_expr();
              this.expect("}") && this.next();
              break;
            default:
              this.error([this.tok.T_STRING, this.tok.T_VARIABLE]);
              // graceful mode : set what as error mode & continue
              what = this.node("constref");
              name = this.text();
              this.next();
              what = what(name);
              break;
          }
          result = node(result, what);
          break;
        }
        default:
          break recursive_scan_loop;
      }
    }
    return result;
  },
  /**
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  read_encaps_var_offset: function() {
    let offset = this.node();
    if (this.token === this.tok.T_STRING) {
      const text = this.text();
      this.next();
      offset = offset("constref", text);
    } else if (this.token === this.tok.T_NUM_STRING) {
      const num = this.text();
      this.next();
      offset = offset("number", num, null);
    } else if (this.token === this.tok.T_VARIABLE) {
      const name = this.text().substring(1);
      this.next();
      offset = offset("variable", name, false, false);
    } else {
      this.expect([
        this.tok.T_STRING,
        this.tok.T_NUM_STRING,
        this.tok.T_VARIABLE
      ]);
      // fallback : consider as constref
      const text = this.text();
      this.next();
      offset = offset("constref", text);
    }
    return offset;
  },
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
  read_reference_variable: function(encapsed, byref) {
    let result = this.read_simple_variable(byref);
    let offset;
    while (this.token != this.EOF) {
      const node = this.node();
      if (this.token == "[") {
        offset = null;
        if (encapsed) {
          offset = this.next().read_encaps_var_offset();
        } else {
          offset = this.next().token === "]" ? null : this.read_dim_offset();
        }
        this.expect("]") && this.next();
        result = node("offsetlookup", result, offset);
      } else if (this.token == "{" && !encapsed) {
        offset = this.next().read_expr();
        this.expect("}") && this.next();
        result = node("offsetlookup", result, offset);
      } else break;
    }
    return result;
  },
  /**
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  read_simple_variable: function(byref) {
    let result = this.node("variable");
    let name;
    if (
      this.expect([this.tok.T_VARIABLE, "$"]) &&
      this.token === this.tok.T_VARIABLE
    ) {
      // plain variable name
      name = this.text().substring(1);
      this.next();
      result = result(name, byref, false);
    } else {
      if (this.token === "$") this.next();
      // dynamic variable name
      switch (this.token) {
        case "{": {
          const expr = this.next().read_expr();
          this.expect("}") && this.next();
          result = result(expr, byref, true);
          break;
        }
        case "$": // $$$var
          result = result(this.read_simple_variable(false), byref);
          break;
        case this.tok.T_VARIABLE: {
          // $$var
          name = this.text().substring(1);
          const node = this.node("variable");
          this.next();
          result = result(node(name, false, false), byref, false);
          break;
        }
        default:
          this.error(["{", "$", this.tok.T_VARIABLE]);
          // graceful mode
          name = this.text();
          this.next();
          result = result(name, byref, false);
      }
    }
    return result;
  }
};
