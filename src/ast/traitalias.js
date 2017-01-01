/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'traitalias';

var IS_PUBLIC     = 'public';
var IS_PROTECTED  = 'protected';
var IS_PRIVATE    = 'private';

/**
 * Defines a trait alias
 * @constructor TraitAlias
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {string} method
 * @property {string|null} as
 * @property {string|null} visibility
 */
var TraitAlias = Node.extends(function TraitAlias(trait, method, as, flags, location) {
  Node.apply(this, [KIND, location]);
  this.trait = trait;
  this.method = method;
  this.as = as;
  if (flags) {
    if (flags[0] === 0) {
      this.visibility = IS_PUBLIC;
    } else if (flags[0] === 1) {
      this.visibility = IS_PROTECTED;
    } else {
      this.visibility = IS_PRIVATE;
    }
  } else {
    this.visibility = null;
  }
});

module.exports = TraitAlias;
