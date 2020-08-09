/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Function_ = require("./function");
const KIND = "method";

/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @memberOf module:php-parser
 * @extends {Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
module.exports = Function_.extends(KIND, function Method() {
  Function_.apply(this, arguments);
  this.kind = KIND;
});
