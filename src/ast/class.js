/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var KIND = 'class';


/**
 * A class definition
 * @constructor Class
 * @extends {Block}
 * @property {Identifier|null} name
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {boolean} isAnonymous
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */
var Class = Block.extends(function Class(
  isFinal, isAbstract, name,
  ext, impl, children, location
) {
  Block.apply(this, [KIND, children, location]);
  this.isAnonymous = name ? false : true;
  this.isAbstract = isAbstract;
  this.isFinal = isFinal;
  this.name = name;
  this.extends = ext;
  this.implements = impl;
});

module.exports = Class;
