/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "entry";

/**
 * An array entry - see [Array](#array)
 * @constructor Entry
 * @extends {Expression}
 * @property {Node|null} key The entry key/offset
 * @property {Node} value The entry value
 * @property {Boolean} byRef By reference
 * @property {Boolean} unpack Argument unpacking
 */
module.exports = Expression.extends(KIND, function Entry(
  key,
  value,
  byRef,
  unpack,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
  this.byRef = byRef;
  this.unpack = unpack;
});
