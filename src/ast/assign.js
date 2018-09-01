/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "assign";

/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @extends {Statement}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
module.exports = Statement.extends(KIND, function Assign(
  left,
  right,
  operator,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.operator = operator;
  this.left = left;
  this.right = right;
});
