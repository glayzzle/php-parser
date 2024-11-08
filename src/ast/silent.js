/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "silent";

/**
 * Avoids to show/log warnings & notices from the inner expression
 * @constructor Silent
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} expr
 */
module.exports = Expression.extends(
  KIND,
  function Silent(expr, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.expr = expr;
  },
);
