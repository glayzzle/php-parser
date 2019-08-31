/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "nullkeyword";

/**
 * Represents the null keyword
 * @constructor NullKeyword
 * @extends {Node}
 */
module.exports = Node.extends(KIND, function NullKeyword(raw, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
