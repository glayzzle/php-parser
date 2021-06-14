/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("./expression");
const KIND = "lookup";

/**
 * Lookup on an offset in the specified object
 * @constructor Lookup
 * @extends {Expression}
 * @property {Expression} what
 * @property {Expression} offset
 */
module.exports = Expr.extends(KIND, function Lookup(
  kind,
  what,
  offset,
  docs,
  location
) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.what = what;
  this.offset = offset;
});
