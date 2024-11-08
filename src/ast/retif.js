/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "retif";

/**
 * Defines a short if statement that returns a value
 * @constructor RetIf
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} test
 * @property {Expression} trueExpr
 * @property {Expression} falseExpr
 */
module.exports = Expression.extends(
  KIND,
  function RetIf(test, trueExpr, falseExpr, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.test = test;
    this.trueExpr = trueExpr;
    this.falseExpr = falseExpr;
  },
);
