/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "silent";

/**
 * Avoids to show/log warnings & notices from the inner expression
 * @constructor Silent
 * @extends {Statement}
 * @property {Expression} expr
 */
module.exports = Statement.extends(KIND, function Silent(expr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.expr = expr;
});
