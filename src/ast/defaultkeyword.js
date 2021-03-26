/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "defaultkeyword";

/**
 * Represents the default keyword, specifically for match statement
 * @constructor DefaultKeyword
 * @extends {Node}
 */
module.exports = Node.extends(KIND, function DefaultKeyword(
  raw,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
