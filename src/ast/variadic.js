/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "variadic";

/**
 * Introduce a list of items into the arguments of the call
 * @constructor Variadic
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Array|Expression} what
 * @see https://wiki.php.net/rfc/argument_unpacking
 */
module.exports = Expression.extends(
  KIND,
  function variadic(what, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.what = what;
  },
);
