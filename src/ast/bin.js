/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "bin";
/**
 * Binary operations
 * @constructor Bin
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */
const Bin = Operation.extends(function Bin(type, left, right, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.left = left;
  this.right = right;
});

module.exports = Bin;
