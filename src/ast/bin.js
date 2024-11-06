/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "bin";
/**
 * Binary operations
 * @constructor Bin
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */
module.exports = Operation.extends(
  KIND,
  function Bin(type, left, right, docs, location) {
    Operation.apply(this, [KIND, docs, location]);
    this.type = type;
    this.left = left;
    this.right = right;
  },
);
