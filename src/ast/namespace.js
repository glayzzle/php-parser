/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var Identifier = require('./identifier');
var KIND = 'namespace';

/**
 * The main program node
 * @constructor Namespace
 * @extends {Block}
 * @property {Identifier} name
 * @property {Boolean} withBrackets
 */
var Namespace = Block.extends(function Namespace(name, children, withBrackets, location) {
  Block.apply(this, [KIND, children, location]);
  if (name instanceof Identifier) {
    this.name = name;
  } else {
    this.name = new Identifier(name);
  }
  this.withBrackets = withBrackets || false;
});

module.exports = Namespace;
