/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "assign";

/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @extends {Expression}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
module.exports = Expression.extends(KIND, function Assign(
  left,
  right,
  operator,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.left = left;
  this.right = right;
  this.operator = operator;
});
