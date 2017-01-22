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
  // TODO: assignment
  // TODO: ternary ? :
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
  // TODO: unary !
  ['instanceof'],
  // TODO: unary ++, --, ~, @, typecasts
  // TODO: [ (array)
  // TODO: clone, new
];

// define nodes shifting
var precedence = {};
binOperatorsPrecedence.forEach(function (list, index) {
  list.forEach(function (operator) {
    precedence[operator] = index + 1;
  });
});

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
  if (right && right.kind === 'bin') {
    var lLevel = precedence[type];
    var rLevel = precedence[right.type];
    if (lLevel && rLevel && rLevel < lLevel) {
      // shift precedence
      var buffer = right.right;
      right.right = right.left;
      right.left = left;
      left = buffer;
      buffer = right.type;
      right.type = type;
      type = buffer;
      buffer = left;
      left = right;
      right = buffer;
    }
  }
  this.type = type;
  this.left = left;
  this.right = right;
});

module.exports = Bin;
