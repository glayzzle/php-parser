/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Statement = require('./statement');
var KIND = 'assign';

/**
 * Assigns a value to the specified target
 * @constructor Assign
 * @extends {Statement}
 * @property {Expression} left
 * @property {Expression} right
 * @property {String} operator
 */
var Assign = Statement.extends(function Assign(left, right, operator, location) {
  Statement.apply(this, [KIND, location]);
  this.operator = operator;
  this.left = left;
  this.right = right;
});

module.exports = Assign;
