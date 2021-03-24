/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "matchentry";

/**
 * An match entry - multiple LHS values, single RHS value
 * @constructor MatchEntry
 * @extends {Expression}
 * @property {Node[]} keys The entry key/offset
 * @property {Node} value The entry value
 */
module.exports = Expression.extends(KIND, function MatchEntry(
  keys,
  value,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.keys = keys;
  this.value = value;
});
