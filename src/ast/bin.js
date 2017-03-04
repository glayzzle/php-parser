/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require('./operation');
var KIND = 'bin';

// operators in ascending order of precedence
var binOperatorsPrecedence = [
  ['or'],
  ['xor'],
  ['and'],
  // TODO: assignment / not sure that PHP allows this with expressions
  ['retif'],
  ['??'],
  ['||'],
  ['&&'],
  ['|'],
  ['^'],
  ['&'],
  ['==', '!=', '===', '!==', /* '<>', */ '<=>'],
  ['<', '<=', '>', '>='],
  ['<<', '>>'],
  ['+', '-', '.'],
  ['*', '/', '%'],
  ['!'],
  ['instanceof'],
  // TODO: typecasts
  // TODO: [ (array)
  // TODO: clone, new
];

/*
x OP1 (y OP2 z)
z OP1 (x OP2 y)
z OP2 (x OP1 y)
*/
/**
 * Binary operations
 * @constructor Bin
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */
var Bin = Operation.extends(function Bin(type, left, right, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.left = left;
  this.right = right;
});

Bin.prototype.precedence = function(node) {
  var lLevel = Bin.precedence[node.type];
  var rLevel = Bin.precedence[this.type];
  if (lLevel && rLevel && rLevel < lLevel) {
    // shift precedence
    node.right = this.left;
    this.left = node;
    return this;
  }
};

// define nodes shifting
Bin.precedence = {};
binOperatorsPrecedence.forEach(function (list, index) {
  list.forEach(function (operator) {
    Bin.precedence[operator] = index + 1;
  });
});

module.exports = Bin;
