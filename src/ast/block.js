/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Statement = require("./statement");
const KIND = "block";

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 * @constructor Block
 * @extends {Statement}
 * @property {Node[]} children
 */
const Block = Statement.extends(function Block(kind, children, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.children = children.filter(Boolean);
});

module.exports = Block;
