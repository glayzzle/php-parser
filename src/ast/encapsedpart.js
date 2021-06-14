/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "encapsedpart";

/**
 * Part of `Encapsed` node
 * @constructor EncapsedPart
 * @extends {Expression}
 * @property {Expression} expression
 * @property {String} syntax
 * @property {Boolean} curly
 */
module.exports = Expression.extends(KIND, function EncapsedPart(
  expression,
  syntax,
  curly,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.expression = expression;
  this.syntax = syntax;
  this.curly = curly;
});
