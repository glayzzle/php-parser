/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "assignref";

/**
 * Assigns a value to the specified target
 * @constructor AssignRef
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
module.exports = Expression.extends(
  KIND,
  function AssignRef(left, right, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.left = left;
    this.right = right;
  },
);
