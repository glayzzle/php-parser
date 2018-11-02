/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "eval";

/**
 * Defines an eval statement
 * @constructor Eval
 * @extends {Expression}
 * @property {Node} source
 */
module.exports = Expression.extends(KIND, function Eval(
  source,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.source = source;
});
