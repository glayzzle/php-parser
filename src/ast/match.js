/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "match";

/**
 * Defines a match expression
 * @constructor Match
 * @extends {Expression}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */
module.exports = Expression.extends(KIND, function Match(
  test,
  body,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});
