/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND = 'constant';

/**
 * Defines a namespace constant
 * @constructor Constant
 * @extends {Declaration}
 * @property {Node|null} value
 */
var Constant = Declaration.extends(function Constant(name, value, location) {
  Declaration.apply(this, [KIND, name, location]);
  this.value = value;
});

module.exports = Constant;
