/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Block = require("./block");
const KIND = "namespace";

/**
 * The main program node
 * @constructor Namespace
 * @extends {Block}
 * @property {String} name
 * @property {Boolean} withBrackets
 */
const Namespace = Block.extends(function Namespace(
  name,
  children,
  withBrackets,
  docs,
  location
) {
  Block.apply(this, [KIND, children, docs, location]);
  this.name = name;
  this.withBrackets = withBrackets || false;
});

module.exports = Namespace;
