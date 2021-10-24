/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "yield";

/**
 * Defines a yield generator statement
 * @constructor Yield
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Expression|null} value
 * @property {Expression|null} key
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
module.exports = Expression.extends(
  KIND,
  function Yield(value, key, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.value = value;
    this.key = key;
  }
);
