/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND          = 'method';

/**
 * Defines a classic function
 * @constructor Function
 * @extends {Declaration}
 * @property {Argument[]} arguments
 * @property {Identifier} type
 * @property {boolean} byref
 * @property {Node[]} children
 */
var Function = Declaration.extends(function Function(name, args, byref, type, location) {
  Declaration.apply(this, [KIND, name, location]);
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.children = [];
});

module.exports = Function;
