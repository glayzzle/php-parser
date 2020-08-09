/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "return";

/**
 * A continue statement
 * @constructor Return
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression|null} expr
 */
module.exports = Statement.extends(KIND, function Return(expr, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.expr = expr;
});
