/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "yieldfrom";

/**
 * Defines a yield from generator statement
 * @constructor YieldFrom
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression} value
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
module.exports = Expression.extends(
  KIND,
  function YieldFrom(value, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.value = value;
  },
);
