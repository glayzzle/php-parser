/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'traitprecedence';

/**
 * Defines a trait alias
 * @constructor TraitPrecedence
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {string} method
 * @property {Identifier[]} instead
 */
var TraitPrecedence = Node.extends(function TraitPrecedence(trait, method, instead, location) {
  Node.apply(this, [KIND, location]);
  this.trait = trait;
  this.method = method;
  this.instead = instead;
});

module.exports = TraitPrecedence;
