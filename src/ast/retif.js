/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'retif';
var Bin = require('./bin');
var PRECEDENCE = Bin.precedence[KIND];

/**
 * Defines a short if statement that returns a value
 * @constructor RetIf
 * @extends {Statement}
 * @property {Expression} test
 * @property {Expression} trueExpr
 * @property {Expression} falseExpr
 */
var RetIf = Statement.extends(function RetIf(test, trueExpr, falseExpr, location) {
  Statement.apply(this, [KIND, location]);
  this.test = test;
  this.trueExpr = trueExpr;
  this.falseExpr = falseExpr;
});

/**
 * Handles precedence over items
 */
RetIf.prototype.precedence = function(node) {
  var what = node.kind === 'bin' ? node.type : node.kind;
  var lLevel = Bin.precedence[what];
  if (lLevel && PRECEDENCE < lLevel) {
    if (node.kind === 'bin') {
      node.right = this.test;
      this.test = node;
      return this;
    } else {
      throw new Error('@todo ' + node.kind);
    }
  }
};

module.exports = RetIf;
