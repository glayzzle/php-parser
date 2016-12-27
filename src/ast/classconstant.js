/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Constant = require('./constant');
var KIND = 'classconstant';

/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @extends {Constant}
 * @property {boolean} isStatic
 * @property {string} visibility
 */
var ClassConstant = Constant.extends(function ClassConstant(name, value, flags, location) {
  Constant.apply(this, [name, value, location]);
  this.kind = KIND;
  this.parseFlags(flags);
});

module.exports = ClassConstant;
