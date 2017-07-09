/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Expr = require('./expression');
var KIND = 'variable';

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @extends {Expression}
 * @example
 * // PHP code :
 * &$foo
 * // AST output
 * {
 *  "kind": "variable",
 *  "name": "foo",
 *  "byref": true,
 *  "curly": false
 * }
 * @property {String|Node} name The variable name (can be a complex expression when the name is resolved dynamically)
 * @property {boolean} byref Indicate if the variable reference is used, ex `&$foo`
 * @property {boolean} curly Indicate if the name is defined between curlies, ex `${foo}`
 */
var Variable = Expr.extends(function Variable(name, byref, curly, location) {
  Expr.apply(this, [KIND, location]);
  this.name = name;
  this.byref = byref || false;
  this.curly = curly || false;
});

module.exports = Variable;
