/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const fn = require("./function");
const KIND = "method";

/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
const Method = fn.extends(function Method() {
  fn.apply(this, arguments);
  this.kind = KIND;
});

module.exports = Method;
