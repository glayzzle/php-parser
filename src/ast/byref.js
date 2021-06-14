/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "byref";

/**
 * Passing by Reference - so the function can modify the variable
 * @constructor ByRef
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {ExpressionStatement} what
 */
module.exports = Expression.extends(KIND, function ByRef(what, docs, location) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
});
