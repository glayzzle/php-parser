/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "expression";

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Expression
 * @extends {Node}
 */
const Expression = Node.extends(function Expression(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

module.exports = Expression;
