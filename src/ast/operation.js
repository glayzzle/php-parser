/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("./expression");
const KIND = "operation";

/**
 * Defines binary operations
 * @constructor Operation
 * @extends {Expression}
 */
const Operation = Expr.extends(function Operation(kind, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
});

module.exports = Operation;
