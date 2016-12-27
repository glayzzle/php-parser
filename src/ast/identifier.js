/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'identifier';


/**
 * Defines an identifier node
 * @constructor Identifier
 * @extends {Node}
 * @property {string} name
 * @property {boolean} fqn
 */
var Identifier = Node.extends(function Identifier(name, fqn, location) {
  Node.apply(this, [KIND, location]);
  this.name = Array.isArray(name) ? name.join('\\') : name;
  if (typeof fqn !== 'boolean') {
    this.fqn = this.name[0] === '\\';
  } else {
    this.fqn = fqn;
  }
});

module.exports = Identifier;
