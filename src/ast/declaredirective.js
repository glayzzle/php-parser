/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "declaredirective";

/**
 * Defines a constant
 * @constructor DeclareDirective
 * @extends {Node}
 * @property {Identifier} name
 * @property {Node|string|number|boolean|null} value
 */
module.exports = Node.extends(KIND, function DeclareDirective(
  key,
  value,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
});
