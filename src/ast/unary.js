/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "unary";

/**
 * Unary operations
 * @constructor Unary
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {string} type
 * @property {Expression} what
 */
module.exports = Operation.extends(
  KIND,
  function Unary(type, what, docs, location) {
    Operation.apply(this, [KIND, docs, location]);
    this.type = type;
    this.what = what;
  },
);
