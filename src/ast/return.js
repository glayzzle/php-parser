/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "return";

/**
 * A continue statement
 * @constructor Return
 * @extends {Node}
 * @property {Expression|null} expr
 */
module.exports = Node.extends(KIND, function Return(expr, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.expr = expr;
});
