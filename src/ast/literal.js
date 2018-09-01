/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("./expression");
const KIND = "literal";

/**
 * Defines an array structure
 * @constructor Literal
 * @extends {Expression}
 * @property {string} raw
 * @property {Node|string|number|boolean|null} value
 */
module.exports = Expr.extends(KIND, function Literal(
  kind,
  value,
  raw,
  docs,
  location
) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.value = value;
  if (raw) {
    this.raw = raw;
  }
});
