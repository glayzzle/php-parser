/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require('./operation');
var KIND = 'unary';

/**
 * Unary operations
 * @constructor Unary
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} what
 */
var Unary = Operation.extends(function Unary(type, what, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.what = what;
});

Unary.prototype.precedence = function(node) {
  if (node.kind === 'bin') {
    this.what = node.left;
    node.left = this;
    return node;
  } else if (node.kind === 'retif') {
    this.what = node.test;
    node.test = this;
    return node;
  }
};

module.exports = Unary;
