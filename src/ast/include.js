/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

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
const Include = Statement.extends(function Include(
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

module.exports = Include;
