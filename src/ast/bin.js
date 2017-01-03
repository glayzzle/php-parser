/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require('./operation');
var KIND = 'bin';

// define nodes shifting
var precedence = {
  '+': 1,
  '-': 1,
  '.': 1,
  '*': 2,
  '/': 2,
  '%': 2
};

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
    }
  }
  this.type = type;
  this.left = left;
  this.right = right;
});

module.exports = Bin;
