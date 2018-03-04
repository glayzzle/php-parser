/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "statement";

/**
 * Any statement.
 * @constructor Statement
 * @extends {Node}
 */
const Statement = Node.extends(function Statement(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

module.exports = Statement;
