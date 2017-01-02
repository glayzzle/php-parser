/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Expression = require('./expression');
var KIND = 'yieldfrom';

/**
 * Defines a yield from generator statement
 * @constructor YieldFrom
 * @extends {Expression}
 * @property {Expression} value
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
var YieldFrom = Expression.extends(function YieldFrom(value, location) {
  Expression.apply(this, [KIND, location]);
  this.value = value;
});

module.exports = YieldFrom;
