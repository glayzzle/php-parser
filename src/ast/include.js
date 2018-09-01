/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "include";

/**
 * Defines system include call
 * @constructor Include
 * @extends {Statement}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */
module.exports = Statement.extends(KIND, function Include(
  once,
  require,
  target,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});
