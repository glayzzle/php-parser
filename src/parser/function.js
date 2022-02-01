/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  /*
   * checks if current token is a reference keyword
   */
  is_reference: function () {
    if (this.token == "&") {
      this.next();
      return true;
    }
    return false;
  },
  /*
   * checks if current token is a variadic keyword
   */
  is_variadic: function () {
    if (this.token === this.tok.T_ELLIPSIS) {
      this.next();
      return true;
    }
    return false;
  },
  /*
   * reading a function
   * ```ebnf
   * function ::= function_declaration code_block
   * ```
   */
  read_function: function (closure, flag, attrs, locStart) {
    const result = this.read_function_declaration(
      closure ? 1 : flag ? 2 : 0,
      flag && flag[1] === 1,
      attrs || [],
      locStart
    );
    if (flag && flag[2] == 1) {
      // abstract function :
      result.parseFlags(flag);
      if (this.expect(";")) {
        this.next();
      }
    } else {
      if (this.expect("{")) {
        result.body = this.read_code_block(false);
        if (result.loc && result.body.loc) {
          result.loc.end = result.body.loc.end;
        }
      }
      if (!closure && flag) {
        result.parseFlags(flag);
      }
    }
    return result;
  },
  /*
   * reads a function declaration (without his body)
   * ```ebnf
   * function_declaration ::= T_FUNCTION '&'?  T_STRING '(' parameter_list ')'
   * ```
   */
  read_function_declaration: function (type, isStatic, attrs, locStart) {
    let nodeName = "function";
    if (type === 1) {
      nodeName = "closure";
    } else if (type === 2) {
      nodeName = "method";
    }
    const result = this.node(nodeName);

    if (this.expect(this.tok.T_FUNCTION)) {
      this.next();
    }
    const isRef = this.is_reference();
    let name = false,
      use = [],
      returnType = null,
      nullable = false;
    if (type !== 1) {
      const nameNode = this.node("identifier");
      if (type === 2) {
        if (this.version >= 700) {
          if (this.token === this.tok.T_STRING || this.is("IDENTIFIER")) {
            name = this.text();
            this.next();
          } else if (this.version < 704) {
            this.error("IDENTIFIER");
          }
        } else if (this.token === this.tok.T_STRING) {
          name = this.text();
          this.next();
        } else {
          this.error("IDENTIFIER");
        }
      } else {
        if (this.version >= 700) {
          if (this.token === this.tok.T_STRING) {
            name = this.text();
            this.next();
          } else if (this.version >= 704) {
            if (!this.expect("(")) {
              this.next();
            }
          } else {
            this.error(this.tok.T_STRING);
            this.next();
          }
        } else {
          if (this.expect(this.tok.T_STRING)) {
            name = this.text();
          }
          this.next();
        }
      }
      name = nameNode(name);
    }
    if (this.expect("(")) this.next();
    const params = this.read_parameter_list();
    if (this.expect(")")) this.next();
    if (type === 1) {
      use = this.read_lexical_vars();
    }
    if (this.token === ":") {
      if (this.next().token === "?") {
        nullable = true;
        this.next();
      }
      returnType = this.read_types();
    }
    const apply_attrgroup_location = (node) => {
      node.attrGroups = attrs || [];

      if (locStart && node.loc) {
        node.loc.start = locStart;
        if (node.loc.source) {
          node.loc.source = this.lexer._input.substr(
            node.loc.start.offset,
            node.loc.end.offset - node.loc.start.offset
          );
        }
      }
      return node;
    };

    if (type === 1) {
      // closure
      return apply_attrgroup_location(
        result(params, isRef, use, returnType, nullable, isStatic)
      );
    }
    return apply_attrgroup_location(
      result(name, params, isRef, returnType, nullable)
    );
  },

  read_lexical_vars: function () {
    let result = [];

    if (this.token === this.tok.T_USE) {
      this.next();
      this.expect("(") && this.next();
      result = this.read_lexical_var_list();
      this.expect(")") && this.next();
    }

    return result;
  },

  read_list_with_dangling_comma: function (item) {
    const result = [];

    while (this.token != this.EOF) {
      result.push(item());
      if (this.token == ",") {
        this.next();
        if (this.version >= 800 && this.token === ")") {
          return result;
        }
      } else if (this.token == ")") {
        break;
      } else {
        this.error([",", ")"]);
        break;
      }
    }
    return result;
  },

  read_lexical_var_list: function () {
    return this.read_list_with_dangling_comma(this.read_lexical_var.bind(this));
  },

  /*
   * ```ebnf
   * lexical_var ::= '&'? T_VARIABLE
   * ```
   */
  read_lexical_var: function () {
    if (this.token === "&") {
      return this.read_byref(this.read_lexical_var.bind(this));
    }
    const result = this.node("variable");
    this.expect(this.tok.T_VARIABLE);
    const name = this.text().substring(1);
    this.next();
    return result(name, false);
  },
  /*
   * reads a list of parameters
   * ```ebnf
   *  parameter_list ::= (parameter ',')* parameter?
   * ```
   */
  read_parameter_list: function () {
    if (this.token != ")") {
      return this.read_list_with_dangling_comma(this.read_parameter.bind(this));
    }
    return [];
  },
  /*
   * ```ebnf
   *  parameter ::= type? '&'? T_ELLIPSIS? T_VARIABLE ('=' expr)?
   * ```
   * @see https://github.com/php/php-src/blob/493524454d66adde84e00d249d607ecd540de99f/Zend/zend_language_parser.y#L640
   */
  read_parameter: function () {
    const node = this.node("parameter");
    let parameterName = null;
    let value = null;
    let types = null;
    let nullable = false;
    let attrs = [];
    if (this.token === this.tok.T_ATTRIBUTE) attrs = this.read_attr_list();
    const flags = this.read_promoted();
    if (this.token === "?") {
      this.next();
      nullable = true;
    }
    types = this.read_types();
    if (nullable && !types) {
      this.raiseError(
        "Expecting a type definition combined with nullable operator"
      );
    }
    const isRef = this.is_reference();
    const isVariadic = this.is_variadic();
    if (this.expect(this.tok.T_VARIABLE)) {
      parameterName = this.node("identifier");
      const name = this.text().substring(1);
      this.next();
      parameterName = parameterName(name);
    }
    if (this.token == "=") {
      value = this.next().read_expr();
    }
    const result = node(
      parameterName,
      types,
      value,
      isRef,
      isVariadic,
      nullable,
      flags
    );
    if (attrs) result.attrGroups = attrs;
    return result;
  },
  read_types() {
    const types = [];
    const unionType = this.node("uniontype");
    let type = this.read_type();
    if (!type) return null;
    types.push(type);
    while (this.token === "|") {
      this.next();
      type = this.read_type();
      types.push(type);
    }
    if (types.length === 1) {
      return types[0];
    } else {
      return unionType(types);
    }
  },
  read_promoted() {
    const MODIFIER_PUBLIC = 1;
    const MODIFIER_PROTECTED = 2;
    const MODIFIER_PRIVATE = 4;
    if (this.token === this.tok.T_PUBLIC) {
      this.next();
      return MODIFIER_PUBLIC;
    } else if (this.token === this.tok.T_PROTECTED) {
      this.next();
      return MODIFIER_PROTECTED;
    } else if (this.token === this.tok.T_PRIVATE) {
      this.next();
      return MODIFIER_PRIVATE;
    }
    return 0;
  },
  /*
   * Reads a list of arguments
   * ```ebnf
   *  function_argument_list ::= '(' (argument_list (',' argument_list)*)? ')'
   * ```
   */
  read_argument_list: function () {
    let result = [];
    this.expect("(") && this.next();
    if (this.token !== ")") {
      result = this.read_non_empty_argument_list();
    }
    this.expect(")") && this.next();
    return result;
  },
  /*
   * Reads non empty argument list
   */
  read_non_empty_argument_list: function () {
    let wasVariadic = false;

    return this.read_function_list(
      function () {
        const argument = this.read_argument();
        if (argument) {
          if (wasVariadic) {
            this.raiseError("Unexpected argument after a variadic argument");
          }
          if (argument.kind === "variadic") {
            wasVariadic = true;
          }
        }
        return argument;
      }.bind(this),
      ","
    );
  },
  /*
   * ```ebnf
   *    argument_list ::= T_STRING ':' expr | T_ELLIPSIS? expr
   * ```
   */
  read_argument: function () {
    if (this.token === this.tok.T_ELLIPSIS) {
      return this.node("variadic")(this.next().read_expr());
    }
    if (
      this.token === this.tok.T_STRING ||
      Object.values(this.lexer.keywords).includes(this.token)
    ) {
      const lexerState = this.lexer.getState();
      const nextToken = this.lexer.lex();
      this.lexer.setState(lexerState);
      if (nextToken === ":") {
        if (this.version < 800) {
          this.raiseError("PHP 8+ is required to use named arguments");
        }
        return this.node("namedargument")(
          this.text(),
          this.next().next().read_expr()
        );
      }
    }
    return this.read_expr();
  },
  /*
   * read type hinting
   * ```ebnf
   *  type ::= T_ARRAY | T_CALLABLE | namespace_name
   * ```
   */
  read_type: function () {
    const result = this.node();
    if (this.token === this.tok.T_ARRAY || this.token === this.tok.T_CALLABLE) {
      const type = this.text();
      this.next();
      return result("typereference", type.toLowerCase(), type);
    } else if (
      this.token === this.tok.T_STRING ||
      this.token === this.tok.T_STATIC
    ) {
      const type = this.text();
      const backup = [this.token, this.lexer.getState()];
      this.next();
      if (
        this.token !== this.tok.T_NS_SEPARATOR &&
        this.ast.typereference.types.indexOf(type.toLowerCase()) > -1
      ) {
        return result("typereference", type.toLowerCase(), type);
      } else {
        // rollback a classic namespace
        this.lexer.tokens.push(backup);
        this.next();
        // fix : destroy not consumed node (release comments)
        result.destroy();
        return this.read_namespace_name();
      }
    } else if (
      this.token === this.tok.T_NAMESPACE ||
      this.token === this.tok.T_NS_SEPARATOR
    ) {
      // fix : destroy not consumed node (release comments)
      result.destroy();
      return this.read_namespace_name();
    }
    // fix : destroy not consumed node (release comments)
    result.destroy();
    return null;
  },
};
