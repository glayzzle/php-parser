/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "namedargument";

/**
 * Named arguments.
 * @memberOf module:php-parser
 * @constructor namedargument
 * @extends {Expression}
 * @property {String} name
 * @property {Expression} value
 * @see https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments
 */
module.exports = Expression.extends(
  KIND,
  function namedargument(name, value, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.name = name;
    this.value = value;
  }
);
