/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const _Function = require("./function");
const KIND = "method";

/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {_Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
module.exports = _Function.extends(KIND, function Method() {
  _Function.apply(this, arguments);
  this.kind = KIND;
});
