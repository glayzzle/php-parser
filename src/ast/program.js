/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'program';

/**
 * The main program node
 * @constructor Program
 * @extends {Node}
 * @property {Node[]} children
 */
var Program = Node.extends(function Program(children) {
  Node.apply(this, [KIND]);
  this.children = children;
});

module.exports = Program;
