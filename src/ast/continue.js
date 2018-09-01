/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "continue";

/**
 * A continue statement
 * @constructor Continue
 * @extends {Node}
 * @property {Number|Null} level
 */
module.exports = Node.extends(KIND, function Continue(level, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.level = level;
});
