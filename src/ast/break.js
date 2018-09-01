/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "break";

/**
 * A break statement
 * @constructor Break
 * @extends {Node}
 * @property {Number|Null} level
 */
module.exports = Node.extends(KIND, function Break(level, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.level = level;
});
