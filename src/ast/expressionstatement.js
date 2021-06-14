/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "expressionstatement";

/**
 * Defines an expression based statement
 * @constructor ExpressionStatement
 * @extends {Statement}
 * @property {Expression} expression
 */
module.exports = Statement.extends(KIND, function ExpressionStatement(
  expr,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.expression = expr;
});
