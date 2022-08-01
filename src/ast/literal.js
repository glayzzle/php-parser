/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "literal";

/**
 * Defines an array structure
 * @constructor Literal
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {string} raw
 * @property {EncapsedPart[]|Node|string|number|boolean|null} value
 */
module.exports = Expression.extends(
  KIND,
  function Literal(kind, value, raw, docs, location) {
    Expression.apply(this, [kind || KIND, docs, location]);
    this.value = value;
    if (raw) {
      this.raw = raw;
    }
  }
);
