/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND          = 'method';
var IS_PUBLIC     = 'public';
var IS_PROTECTED  = 'protected';
var IS_PRIVATE    = 'private';
/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {Declaration}
 * @property {Argument[]} arguments
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 * @property {Node[]} children
 */
var Method = Declaration.extends(function Method(name, args, children, flags, location) {
  Declaration.apply(this, [KIND, name, location]);
  this.arguments = args;
  this.children = children;
  this.parseFlags(flags);
});

module.exports = Method;
