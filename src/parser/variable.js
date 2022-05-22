/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
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
  read_variable: function (read_only, encapsed) {
    let result;
    // check the byref flag
    if (this.token === "&") {
      return this.read_byref(
        this.read_variable.bind(this, read_only, encapsed)
      );
    }

    // reads the entry point
    if (this.is([this.tok.T_VARIABLE, "$"])) {
      result = this.read_reference_variable(encapsed);
    } else if (
      this.is([
        this.tok.T_NS_SEPARATOR,
        this.tok.T_STRING,
        this.tok.T_NAME_RELATIVE,
        this.tok.T_NAME_QUALIFIED,
        this.tok.T_NAME_FULLY_QUALIFIED,
        this.tok.T_NAMESPACE,
      ])
    ) {
      result = this.node();
      const name = this.read_namespace_name();
      if (
        this.token != this.tok.T_DOUBLE_COLON &&
        this.token != "(" &&
        ["parentreference", "selfreference"].indexOf(name.kind) === -1
      ) {
        // @see parser.js line 130 : resolves a conflict with scalar
        const literal = name.name.toLowerCase();
        if (literal === "true") {
          result = name.destroy(result("boolean", true, name.name));
        } else if (literal === "false") {
          result = name.destroy(result("boolean", false, name.name));
        } else if (literal === "null") {
          result = name.destroy(result("nullkeyword", name.name));
        } else {
          result.destroy(name);
          result = name;
        }
      } else {
        // @fixme possible #193 bug
        result.destroy(name);
        result = name;
      }
    } else if (this.token === this.tok.T_STATIC) {
      result = this.node("staticreference");
      const raw = this.text();
      this.next();
      result = result(raw);
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
  read_static_getter: function (what, encapsed) {
    const result = this.node("staticlookup");
    let offset, name;
    if (this.next().is([this.tok.T_VARIABLE, "$"])) {
      offset = this.read_reference_variable(encapsed);
    } else if (
      this.token === this.tok.T_STRING ||
      this.token === this.tok.T_CLASS ||
      (this.version >= 700 && this.is("IDENTIFIER"))
    ) {
      offset = this.node("identifier");
      name = this.text();
      this.next();
      offset = offset(name);
    } else if (this.token === "{") {
      offset = this.node("literal");
      name = this.next().read_expr();
      this.expect("}") && this.next();
      offset = offset("literal", name, null);
      this.expect("(");
    } else {
      this.error([this.tok.T_VARIABLE, this.tok.T_STRING]);
      // graceful mode : set getter as error node and continue
      offset = this.node("identifier");
      name = this.text();
      this.next();
      offset = offset(name);
    }
    return result(what, offset);
  },

  read_what: function (is_static_lookup = false) {
    let what = null;
    let name = null;
    switch (this.next().token) {
      case this.tok.T_STRING:
        what = this.node("identifier");
        name = this.text();
        this.next();
        what = what(name);

        if (is_static_lookup && this.token === this.tok.T_OBJECT_OPERATOR) {
          this.error();
        }
        break;
      case this.tok.T_VARIABLE:
        what = this.node("variable");
        name = this.text().substring(1);
        this.next();
        what = what(name, false);
        break;
      case "$":
        what = this.node();
        this.next().expect(["$", "{", this.tok.T_VARIABLE]);
        if (this.token === "{") {
          // $obj->${$varname}
          name = this.next().read_expr();
          this.expect("}") && this.next();
          what = what("variable", name, true);
        } else {
          // $obj->$$varname
          name = this.read_expr();
          what = what("variable", name, false);
        }
        break;
      case "{":
        what = this.node("encapsedpart");
        name = this.next().read_expr();
        this.expect("}") && this.next();
        what = what(name, "complex", false);
        break;
      default:
        this.error([this.tok.T_STRING, this.tok.T_VARIABLE, "$", "{"]);
        // graceful mode : set what as error mode & continue
        what = this.node("identifier");
        name = this.text();
        this.next();
        what = what(name);
        break;
    }

    return what;
  },

  recursive_variable_chain_scan: function (result, read_only, encapsed) {
    let node, offset;
    recursive_scan_loop: while (this.token != this.EOF) {
      switch (this.token) {
        case "(":
          if (read_only) {
            // @fixme : add more informations & test
            return result;
          } else {
            result = this.node("call")(result, this.read_argument_list());
          }
          break;
        case "[":
        case "{": {
          const backet = this.token;
          const isSquareBracket = backet === "[";
          node = this.node("offsetlookup");
          this.next();
          offset = false;
          if (encapsed) {
            offset = this.read_encaps_var_offset();
            this.expect(isSquareBracket ? "]" : "}") && this.next();
          } else {
            const isCallableVariable = isSquareBracket
              ? this.token !== "]"
              : this.token !== "}";
            // callable_variable : https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1122
            if (isCallableVariable) {
              offset = this.read_expr();
              this.expect(isSquareBracket ? "]" : "}") && this.next();
            } else {
              this.next();
            }
          }
          result = node(result, offset);
          break;
        }
        case this.tok.T_DOUBLE_COLON:
          // @see https://github.com/glayzzle/php-parser/issues/107#issuecomment-354104574
          if (
            result.kind === "staticlookup" &&
            result.offset.kind === "identifier"
          ) {
            this.error();
          }

          node = this.node("staticlookup");
          result = node(result, this.read_what(true));

          // fix 185
          // static lookup dereferencables are limited to staticlookup over functions
          /*if (dereferencable && this.token !== "(") {
            this.error("(");
          }*/
          break;
        case this.tok.T_OBJECT_OPERATOR: {
          node = this.node("propertylookup");
          result = node(result, this.read_what());
          break;
        }
        case this.tok.T_NULLSAFE_OBJECT_OPERATOR: {
          node = this.node("nullsafepropertylookup");
          result = node(result, this.read_what());
          break;
        }
        default:
          break recursive_scan_loop;
      }
    }
    return result;
  },
  /*
   * https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L1231
   */
  read_encaps_var_offset: function () {
    let offset = this.node();
    if (this.token === this.tok.T_STRING) {
      const text = this.text();
      this.next();
      offset = offset("identifier", text);
    } else if (this.token === this.tok.T_NUM_STRING) {
      const num = this.text();
      this.next();
      offset = offset("number", num, null);
    } else if (this.token === "-") {
      this.next();
      const num = -1 * this.text();
      this.expect(this.tok.T_NUM_STRING) && this.next();
      offset = offset("number", num, null);
    } else if (this.token === this.tok.T_VARIABLE) {
      const name = this.text().substring(1);
      this.next();
      offset = offset("variable", name, false);
    } else {
      this.expect([
        this.tok.T_STRING,
        this.tok.T_NUM_STRING,
        "-",
        this.tok.T_VARIABLE,
      ]);
      // fallback : consider as identifier
      const text = this.text();
      this.next();
      offset = offset("identifier", text);
    }
    return offset;
  },
  /*
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
  read_reference_variable: function (encapsed) {
    let result = this.read_simple_variable();
    let offset;
    while (this.token != this.EOF) {
      const node = this.node();
      if (this.token == "{" && !encapsed) {
        // @fixme check coverage, not sure thats working
        offset = this.next().read_expr();
        this.expect("}") && this.next();
        result = node("offsetlookup", result, offset);
      } else {
        node.destroy();
        break;
      }
    }
    return result;
  },
  /*
   * ```ebnf
   *  simple_variable ::= T_VARIABLE | '$' '{' expr '}' | '$' simple_variable
   * ```
   */
  read_simple_variable: function () {
    let result = this.node("variable");
    let name;
    if (
      this.expect([this.tok.T_VARIABLE, "$"]) &&
      this.token === this.tok.T_VARIABLE
    ) {
      // plain variable name
      name = this.text().substring(1);
      this.next();
      result = result(name, false);
    } else {
      if (this.token === "$") this.next();
      // dynamic variable name
      switch (this.token) {
        case "{": {
          const expr = this.next().read_expr();
          this.expect("}") && this.next();
          result = result(expr, true);
          break;
        }
        case "$": // $$$var
          result = result(this.read_simple_variable(), false);
          break;
        case this.tok.T_VARIABLE: {
          // $$var
          name = this.text().substring(1);
          const node = this.node("variable");
          this.next();
          result = result(node(name, false), false);
          break;
        }
        default:
          this.error(["{", "$", this.tok.T_VARIABLE]);
          // graceful mode
          name = this.text();
          this.next();
          result = result(name, false);
      }
    }
    return result;
  },
};
