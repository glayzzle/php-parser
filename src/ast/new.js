/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "new";

/**
 * Creates a new instance of the specified class
 * @constructor New
 * @extends {Expression}
 * @property {Identifier|Variable|Class} what
 * @property {Arguments[]} arguments
 */
module.exports = Expression.extends(KIND, function New(
  what,
  args,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});
