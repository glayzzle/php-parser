/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "empty";

/**
 * Defines an empty check call
 * @constructor Empty
 * @extends {Expression}
 */
module.exports = Expression.extends(KIND, function Empty(
  expression,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
});
