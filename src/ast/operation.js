/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expr = require('./expression');
var KIND = 'operation';

/**
 * Defines binary operations
 * @constructor Operation
 * @extends {Expression}
 */
var Operation = Expr.extends(function Operation(kind, location) {
  Expr.apply(this, [kind || KIND, location]);
});

module.exports = Operation;
