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
 * @memberOf module:php-parser
 * @constructor Match
 * @extends {Expression}
 * @property {Expression} cond Condition expression to match against
 * @property {MatchArm[]} arms Arms for comparison
 */
module.exports = Expression.extends(
  KIND,
  function Match(cond, arms, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.cond = cond;
    this.arms = arms;
  }
);
