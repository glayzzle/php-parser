/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "variable";

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @memberOf module:php-parser
 * @extends {Expression}
 * @example
 * // PHP code :
 * $foo
 * // AST output
 * {
 *  "kind": "variable",
 *  "name": "foo",
 *  "curly": false
 * }
 * @property {string|Node} name The variable name (can be a complex expression when the name is resolved dynamically)
 * @property {boolean} curly Indicate if the name is defined between curlies, ex `${foo}`
 */
module.exports = Expression.extends(
  KIND,
  function Variable(name, curly, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.name = name;
    this.curly = curly || false;
  },
);
