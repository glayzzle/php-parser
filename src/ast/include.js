/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "include";

/**
 * Defines system include call
 * @constructor Include
 * @extends {Expression}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */
module.exports = Expression.extends(KIND, function Include(
  once,
  require,
  target,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});
