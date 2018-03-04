/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Expr = require("./expression");
const KIND = "literal";

/**
 * Defines an array structure
 * @constructor Literal
 * @extends {Expression}
 * @property {Node|string|number|boolean|null} value
 */
const Literal = Expr.extends(function Literal(kind, value, docs, location) {
  Expr.apply(this, [kind || KIND, docs, location]);
  this.value = value;
});

module.exports = Literal;
