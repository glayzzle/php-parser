/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expr = require("./expression");
const KIND = "constref";

/**
 * A constant reference
 * @constructor ConstRef
 * @extends {Expression}
 * @property {String|Node} name
 */
module.exports = Expr.extends(KIND, function ConstRef(
  identifier,
  docs,
  location
) {
  Expr.apply(this, [KIND, docs, location]);
  this.name = identifier;
});
