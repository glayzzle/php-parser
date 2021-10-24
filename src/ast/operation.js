/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("./expression");
const KIND = "operation";

/**
 * Defines binary operations
 * @constructor Operation
 * @memberOf module:php-parser
 * @extends {Expression}
 */
module.exports = Expr.extends(KIND, function Operation(kind, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
});
