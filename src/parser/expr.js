/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

module.exports = {
  read_expr: function (expr) {
    const result = this.node();
    if (this.token === "@") {
      if (!expr) {
        expr = this.next().read_expr();
      }
      return result("silent", expr);
    }
    if (!expr) {
      expr = this.read_expr_item();
    }
    // binary operations
    if (this.token === "|") {
      return result("bin", "|", expr, this.next().read_expr());
    }
    if (this.token === "&") {
      return result("bin", "&", expr, this.next().read_expr());
    }
    if (this.token === "^") {
      return result("bin", "^", expr, this.next().read_expr());
    }
    if (this.token === ".") {
      return result("bin", ".", expr, this.next().read_expr());
    }
    if (this.token === "+") {
      return result("bin", "+", expr, this.next().read_expr());
    }
    if (this.token === "-") {
      return result("bin", "-", expr, this.next().read_expr());
    }
    if (this.token === "*") {
      return result("bin", "*", expr, this.next().read_expr());
    }
    if (this.token === "/") {
      return result("bin", "/", expr, this.next().read_expr());
    }
    if (this.token === "%") {
      return result("bin", "%", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_POW) {
      return result("bin", "**", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_SL) {
      return result("bin", "<<", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_SR) {
      return result("bin", ">>", expr, this.next().read_expr());
    }
    // more binary operations (formerly bool)
    if (this.token === this.tok.T_BOOLEAN_OR) {
      return result("bin", "||", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_LOGICAL_OR) {
      return result("bin", "or", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_BOOLEAN_AND) {
      return result("bin", "&&", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_LOGICAL_AND) {
      return result("bin", "and", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_LOGICAL_XOR) {
      return result("bin", "xor", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_IDENTICAL) {
      return result("bin", "===", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_NOT_IDENTICAL) {
      return result("bin", "!==", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_EQUAL) {
      return result("bin", "==", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_NOT_EQUAL) {
      return result("bin", "!=", expr, this.next().read_expr());
    }
    if (this.token === "<") {
      return result("bin", "<", expr, this.next().read_expr());
    }
    if (this.token === ">") {
      return result("bin", ">", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_SMALLER_OR_EQUAL) {
      return result("bin", "<=", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_IS_GREATER_OR_EQUAL) {
      return result("bin", ">=", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_SPACESHIP) {
      return result("bin", "<=>", expr, this.next().read_expr());
    }
    if (this.token === this.tok.T_INSTANCEOF) {
      expr = result(
        "bin",
        "instanceof",
        expr,
        this.next().read_class_name_reference()
      );
      if (
        this.token !== ";" &&
        this.token !== this.tok.T_INLINE_HTML &&
        this.token !== this.EOF
      ) {
        expr = this.read_expr(expr);
      }
    }

    // extra operations :
    // $username = $_GET['user'] ?? 'nobody';
    if (this.token === this.tok.T_COALESCE) {
      return result("bin", "??", expr, this.next().read_expr());
    }

    // extra operations :
    // $username = $_GET['user'] ? true : false;
    if (this.token === "?") {
      let trueArg = null;
      if (this.next().token !== ":") {
        trueArg = this.read_expr();
      }
      this.expect(":") && this.next();
      return result("retif", expr, trueArg, this.read_expr());
    } else {
      // see #193
      result.destroy(expr);
    }

    return expr;
  },

  /*
   * Reads a cast expression
   */
  read_expr_cast: function (type) {
    return this.node("cast")(type, this.text(), this.next().read_expr());
  },

  /*
   * Read a isset variable
   */
  read_isset_variable: function () {
    return this.read_expr();
  },

  /*
   * Reads isset variables
   */
  read_isset_variables: function () {
    return this.read_function_list(this.read_isset_variable, ",");
  },

  /*
   * Reads internal PHP functions
   */
  read_internal_functions_in_yacc: function () {
    let result = null;
    switch (this.token) {
      case this.tok.T_ISSET:
        {
          result = this.node("isset");
          if (this.next().expect("(")) {
            this.next();
          }
          const variables = this.read_isset_variables();
          if (this.expect(")")) {
            this.next();
          }
          result = result(variables);
        }
        break;
      case this.tok.T_EMPTY:
        {
          result = this.node("empty");
          if (this.next().expect("(")) {
            this.next();
          }
          const expression = this.read_expr();
          if (this.expect(")")) {
            this.next();
          }
          result = result(expression);
        }
        break;
      case this.tok.T_INCLUDE:
        result = this.node("include")(false, false, this.next().read_expr());
        break;
      case this.tok.T_INCLUDE_ONCE:
        result = this.node("include")(true, false, this.next().read_expr());
        break;
      case this.tok.T_EVAL:
        {
          result = this.node("eval");
          if (this.next().expect("(")) {
            this.next();
          }
          const expr = this.read_expr();
          if (this.expect(")")) {
            this.next();
          }
          result = result(expr);
        }
        break;
      case this.tok.T_REQUIRE:
        result = this.node("include")(false, true, this.next().read_expr());
        break;
      case this.tok.T_REQUIRE_ONCE:
        result = this.node("include")(true, true, this.next().read_expr());
        break;
    }

    return result;
  },

  /*
   * Reads optional expression
   */
  read_optional_expr: function (stopToken) {
    if (this.token !== stopToken) {
      return this.read_expr();
    }

    return null;
  },

  /*
   * Reads exit expression
   */
  read_exit_expr: function () {
    let expression = null;

    if (this.token === "(") {
      this.next();
      expression = this.read_optional_expr(")");
      this.expect(")") && this.next();
    }

    return expression;
  },

  /*
   * ```ebnf
   * Reads an expression
   *  expr ::= @todo
   * ```
   */
  read_expr_item: function () {
    let result,
      expr,
      attrs = [];
    if (this.token === "+") {
      return this.node("unary")("+", this.next().read_expr());
    }
    if (this.token === "-") {
      return this.node("unary")("-", this.next().read_expr());
    }
    if (this.token === "!") {
      return this.node("unary")("!", this.next().read_expr());
    }
    if (this.token === "~") {
      return this.node("unary")("~", this.next().read_expr());
    }

    if (this.token === "(") {
      expr = this.next().read_expr();
      expr.parenthesizedExpression = true;
      this.expect(")") && this.next();
      return this.handleDereferencable(expr);
    }

    if (this.token === "`") {
      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1048
      return this.read_encapsed_string("`");
    }

    if (this.token === this.tok.T_LIST) {
      let assign = null;
      const isInner = this.innerList;
      result = this.node("list");
      if (!isInner) {
        assign = this.node("assign");
      }
      if (this.next().expect("(")) {
        this.next();
      }

      if (!this.innerList) this.innerList = true;

      // reads inner items
      const assignList = this.read_array_pair_list(false);
      if (this.expect(")")) {
        this.next();
      }

      // check if contains at least one assignment statement
      let hasItem = false;
      for (let i = 0; i < assignList.length; i++) {
        if (assignList[i] !== null && assignList[i].kind !== "noop") {
          hasItem = true;
          break;
        }
      }
      if (!hasItem) {
        /* istanbul ignore next */
        this.raiseError(
          "Fatal Error :  Cannot use empty list on line " +
            this.lexer.yylloc.first_line
        );
      }

      // handles the node resolution
      if (!isInner) {
        this.innerList = false;
        if (this.expect("=")) {
          return assign(
            result(assignList, false),
            this.next().read_expr(),
            "="
          );
        } else {
          // error fallback : list($a, $b);
          /* istanbul ignore next */
          return result(assignList, false);
        }
      } else {
        return result(assignList, false);
      }
    }

    if (this.token === this.tok.T_ATTRIBUTE) {
      attrs = this.read_attr_list();
    }

    if (this.token === this.tok.T_CLONE) {
      return this.node("clone")(this.next().read_expr());
    }

    switch (this.token) {
      case this.tok.T_INC:
        return this.node("pre")("+", this.next().read_variable(false, false));

      case this.tok.T_DEC:
        return this.node("pre")("-", this.next().read_variable(false, false));

      case this.tok.T_NEW:
        return this.read_new_expr();

      case this.tok.T_ISSET:
      case this.tok.T_EMPTY:
      case this.tok.T_INCLUDE:
      case this.tok.T_INCLUDE_ONCE:
      case this.tok.T_EVAL:
      case this.tok.T_REQUIRE:
      case this.tok.T_REQUIRE_ONCE:
        return this.read_internal_functions_in_yacc();

      case this.tok.T_MATCH:
        return this.read_match_expression();
      case this.tok.T_INT_CAST:
        return this.read_expr_cast("int");

      case this.tok.T_DOUBLE_CAST:
        return this.read_expr_cast("float");

      case this.tok.T_STRING_CAST:
        return this.read_expr_cast(
          this.text().indexOf("binary") !== -1 ? "binary" : "string"
        );

      case this.tok.T_ARRAY_CAST:
        return this.read_expr_cast("array");

      case this.tok.T_OBJECT_CAST:
        return this.read_expr_cast("object");

      case this.tok.T_BOOL_CAST:
        return this.read_expr_cast("bool");

      case this.tok.T_UNSET_CAST:
        return this.read_expr_cast("unset");

      case this.tok.T_THROW: {
        if (this.version < 800) {
          this.raiseError("PHP 8+ is required to use throw as an expression");
        }
        const result = this.node("throw");
        const expr = this.next().read_expr();
        return result(expr);
      }
      case this.tok.T_EXIT: {
        const useDie = this.lexer.yytext.toLowerCase() === "die";
        result = this.node("exit");
        this.next();
        const expression = this.read_exit_expr();
        return result(expression, useDie);
      }

      case this.tok.T_PRINT:
        return this.node("print")(this.next().read_expr());

      // T_YIELD (expr (T_DOUBLE_ARROW expr)?)?
      case this.tok.T_YIELD: {
        let value = null;
        let key = null;
        result = this.node("yield");
        if (this.next().is("EXPR")) {
          // reads the yield return value
          value = this.read_expr();
          if (this.token === this.tok.T_DOUBLE_ARROW) {
            // reads the yield returned key
            key = value;
            value = this.next().read_expr();
          }
        }
        return result(value, key);
      }

      // T_YIELD_FROM expr
      case this.tok.T_YIELD_FROM:
        result = this.node("yieldfrom");
        expr = this.next().read_expr();
        return result(expr);

      case this.tok.T_FN:
      case this.tok.T_FUNCTION:
        return this.read_inline_function(undefined, attrs);

      case this.tok.T_STATIC: {
        const backup = [this.token, this.lexer.getState()];
        this.next();
        if (
          this.token === this.tok.T_FUNCTION ||
          (this.version >= 704 && this.token === this.tok.T_FN)
        ) {
          // handles static function
          return this.read_inline_function([0, 1, 0], attrs);
        } else {
          // rollback
          this.lexer.tokens.push(backup);
          this.next();
        }
      }
    }

    // SCALAR | VARIABLE
    if (this.is("VARIABLE")) {
      result = this.node();
      expr = this.read_variable(false, false);

      // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L877
      // should accept only a variable
      const isConst =
        expr.kind === "identifier" ||
        (expr.kind === "staticlookup" && expr.offset.kind === "identifier");

      // VARIABLES SPECIFIC OPERATIONS
      switch (this.token) {
        case "=": {
          if (isConst) this.error("VARIABLE");
          if (this.next().token == "&") {
            return this.read_assignref(result, expr);
          }
          return result("assign", expr, this.read_expr(), "=");
        }

        // operations :
        case this.tok.T_PLUS_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "+=");

        case this.tok.T_MINUS_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "-=");

        case this.tok.T_MUL_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "*=");

        case this.tok.T_POW_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "**=");

        case this.tok.T_DIV_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "/=");

        case this.tok.T_CONCAT_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), ".=");

        case this.tok.T_MOD_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "%=");

        case this.tok.T_AND_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "&=");

        case this.tok.T_OR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "|=");

        case this.tok.T_XOR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "^=");

        case this.tok.T_SL_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "<<=");

        case this.tok.T_SR_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), ">>=");

        case this.tok.T_COALESCE_EQUAL:
          if (isConst) this.error("VARIABLE");
          return result("assign", expr, this.next().read_expr(), "??=");

        case this.tok.T_INC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "+", expr);
        case this.tok.T_DEC:
          if (isConst) this.error("VARIABLE");
          this.next();
          return result("post", "-", expr);
        default:
          // see #193
          result.destroy(expr);
      }
    } else if (this.is("SCALAR")) {
      result = this.node();
      expr = this.read_scalar();
      if (expr.kind === "array" && expr.shortForm && this.token === "=") {
        // list assign
        const list = this.convertToList(expr);
        if (expr.loc) list.loc = expr.loc;
        const right = this.next().read_expr();
        return result("assign", list, right, "=");
      } else {
        // see #189 - swap docs on nodes
        result.destroy(expr);
      }
      // classic array
      return this.handleDereferencable(expr);
    } else {
      this.error("EXPR");
      this.next();
    }

    // returns variable | scalar
    return expr;
  },

  /*
   * Recursively convert nested array to nested list.
   */
  convertToList: function (array) {
    const convertedItems = array.items.map((entry) => {
      if (
        entry.value &&
        entry.value.kind === "array" &&
        entry.value.shortForm
      ) {
        entry.value = this.convertToList(entry.value);
      }
      return entry;
    });
    const node = this.node("list")(convertedItems, true);
    if (array.loc) node.loc = array.loc;
    if (array.leadingComments) node.leadingComments = array.leadingComments;
    if (array.trailingComments) node.trailingComments = array.trailingComments;
    return node;
  },

  /*
   * Reads assignment
   * @param {*} left
   */
  read_assignref: function (result, left) {
    this.next();
    let right;
    if (this.token === this.tok.T_NEW) {
      if (this.version >= 700) {
        this.error();
      }
      right = this.read_new_expr();
    } else {
      right = this.read_variable(false, false);
    }

    return result("assignref", left, right);
  },

  /*
   *
   * inline_function:
   * 		function returns_ref backup_doc_comment '(' parameter_list ')' lexical_vars return_type
   * 		backup_fn_flags '{' inner_statement_list '}' backup_fn_flags
   * 			{ $$ = zend_ast_create_decl(ZEND_AST_CLOSURE, $2 | $13, $1, $3,
   * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0),
   * 				  $5, $7, $11, $8); CG(extra_fn_flags) = $9; }
   * 	|	fn returns_ref '(' parameter_list ')' return_type backup_doc_comment T_DOUBLE_ARROW backup_fn_flags backup_lex_pos expr backup_fn_flags
   * 			{ $$ = zend_ast_create_decl(ZEND_AST_ARROW_FUNC, $2 | $12, $1, $7,
   * 				  zend_string_init("{closure}", sizeof("{closure}") - 1, 0), $4, NULL,
   * 				  zend_ast_create(ZEND_AST_RETURN, $11), $6);
   * 				  ((zend_ast_decl *) $$)->lex_pos = $10;
   * 				  CG(extra_fn_flags) = $9; }   *
   */
  read_inline_function: function (flags, attrs) {
    if (this.token === this.tok.T_FUNCTION) {
      const result = this.read_function(true, flags, attrs);
      result.attrGroups = attrs;
      return result;
    }
    // introduced in PHP 7.4
    if (!this.version >= 704) {
      this.raiseError("Arrow Functions are not allowed");
    }
    // as an arrowfunc
    const node = this.node("arrowfunc");
    // eat T_FN
    if (this.expect(this.tok.T_FN)) this.next();
    // check the &
    const isRef = this.is_reference();
    // ...
    if (this.expect("(")) this.next();
    const params = this.read_parameter_list();
    if (this.expect(")")) this.next();
    let nullable = false;
    let returnType = null;
    if (this.token === ":") {
      if (this.next().token === "?") {
        nullable = true;
        this.next();
      }
      returnType = this.read_types();
    }
    if (this.expect(this.tok.T_DOUBLE_ARROW)) this.next();
    const body = this.read_expr();
    const result = node(
      params,
      isRef,
      body,
      returnType,
      nullable,
      flags ? true : false
    );
    result.attrGroups = attrs;
    return result;
  },

  read_match_expression: function () {
    const node = this.node("match");
    this.expect(this.tok.T_MATCH) && this.next();
    if (this.version < 800) {
      this.raiseError("Match statements are not allowed before PHP 8");
    }
    let cond = null;
    let arms = [];
    if (this.expect("(")) this.next();
    cond = this.read_expr();
    if (this.expect(")")) this.next();
    if (this.expect("{")) this.next();
    arms = this.read_match_arms();
    if (this.expect("}")) this.next();
    return node(cond, arms);
  },

  read_match_arms: function () {
    return this.read_list(() => this.read_match_arm(), ",", true);
  },

  read_match_arm: function () {
    if (this.token === "}") {
      return;
    }
    return this.node("matcharm")(this.read_match_arm_conds(), this.read_expr());
  },

  read_match_arm_conds: function () {
    let conds = [];
    if (this.token === this.tok.T_DEFAULT) {
      conds = null;
      this.next();
    } else {
      conds.push(this.read_expr());
      while (this.token === ",") {
        this.next();
        if (this.token === this.tok.T_DOUBLE_ARROW) {
          this.next();
          return conds;
        }
        conds.push(this.read_expr());
      }
    }
    if (this.expect(this.tok.T_DOUBLE_ARROW)) {
      this.next();
    }
    return conds;
  },

  read_attribute() {
    const name = this.text();
    let args = [];
    this.next();
    if (this.token === "(") {
      args = this.read_argument_list();
    }
    return this.node("attribute")(name, args);
  },
  read_attr_list() {
    const list = [];
    if (this.token === this.tok.T_ATTRIBUTE) {
      do {
        const attrGr = this.node("attrgroup")([]);
        this.next();
        attrGr.attrs.push(this.read_attribute());
        while (this.token === ",") {
          this.next();
          if (this.token !== "]") attrGr.attrs.push(this.read_attribute());
        }
        list.push(attrGr);
        this.expect("]");
        this.next();
      } while (this.token === this.tok.T_ATTRIBUTE);
    }
    return list;
  },

  /*
   * ```ebnf
   *    new_expr ::= T_NEW (namespace_name function_argument_list) | (T_CLASS ... class declaration)
   * ```
   * https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L850
   */
  read_new_expr: function () {
    const result = this.node("new");
    this.expect(this.tok.T_NEW) && this.next();
    let args = [];
    const attrs = this.read_attr_list();
    if (this.token === this.tok.T_CLASS) {
      const what = this.node("class");
      // Annonymous class declaration
      if (this.next().token === "(") {
        args = this.read_argument_list();
      }
      const propExtends = this.read_extends_from();
      const propImplements = this.read_implements_list();
      let body = null;
      if (this.expect("{")) {
        body = this.next().read_class_body(true, false);
      }
      const whatNode = what(null, propExtends, propImplements, body, [0, 0, 0]);
      whatNode.attrGroups = attrs;
      return result(whatNode, args);
    }
    // Already existing class
    let name = this.read_new_class_name();
    while (this.token === "[") {
      const offsetNode = this.node("offsetlookup");
      const offset = this.next().read_encaps_var_offset();
      this.expect("]") && this.next();
      name = offsetNode(name, offset);
    }
    if (this.token === "(") {
      args = this.read_argument_list();
    }
    return result(name, args);
  },
  /*
   * Reads a class name
   * ```ebnf
   * read_new_class_name ::= namespace_name | variable
   * ```
   */
  read_new_class_name: function () {
    if (
      this.token === this.tok.T_NS_SEPARATOR ||
      this.token === this.tok.T_NAME_RELATIVE ||
      this.token === this.tok.T_NAME_QUALIFIED ||
      this.token === this.tok.T_NAME_FULLY_QUALIFIED ||
      this.token === this.tok.T_STRING ||
      this.token === this.tok.T_NAMESPACE
    ) {
      let result = this.read_namespace_name(true);
      if (this.token === this.tok.T_DOUBLE_COLON) {
        result = this.read_static_getter(result);
      }
      return result;
    } else if (this.is("VARIABLE")) {
      return this.read_variable(true, false);
    } else {
      this.expect([this.tok.T_STRING, "VARIABLE"]);
    }
  },
  handleDereferencable: function (expr) {
    while (this.token !== this.EOF) {
      if (
        this.token === this.tok.T_OBJECT_OPERATOR ||
        this.token === this.tok.T_DOUBLE_COLON
      ) {
        expr = this.recursive_variable_chain_scan(expr, false, false, true);
      } else if (this.token === this.tok.T_CURLY_OPEN || this.token === "[") {
        expr = this.read_dereferencable(expr);
      } else if (this.token === "(") {
        // https://github.com/php/php-src/blob/master/Zend/zend_language_parser.y#L1118
        expr = this.node("call")(expr, this.read_argument_list());
      } else {
        return expr;
      }
    }
    return expr;
  },
};
