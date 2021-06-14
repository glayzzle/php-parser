/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "identifier";

/**
 * Defines an identifier node
 * @constructor Identifier
 * @extends {Node}
 * @property {string} name
 */
const Identifier = Node.extends(KIND, function Identifier(
  name,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.name = name;
});

module.exports = Identifier;
