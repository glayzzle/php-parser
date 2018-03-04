/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Expr = require("./expression");
const KIND = "variadic";

/**
 * Introduce a list of items into the arguments of the call
 * @constructor variadic
 * @extends {Expression}
 * @property {Array|Expression} what
 * @see https://wiki.php.net/rfc/argument_unpacking
 */
const variadic = Expr.extends(function variadic(what, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.what = what;
});

module.exports = variadic;
