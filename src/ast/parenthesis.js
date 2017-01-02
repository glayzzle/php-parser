/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require('./operation');
var KIND = 'parenthesis';

/**
 * Parenthesis encapsulation `(... expr ...)`
 * @constructor Parenthesis
 * @extends {Operation}
 * @property {Expression} inner
 */
var Parenthesis = Operation.extends(function Parenthesis(inner, location) {
  Operation.apply(this, [KIND, location]);
  this.inner = inner;
});

module.exports = Parenthesis;
