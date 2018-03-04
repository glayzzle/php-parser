/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Expr = require("./expression");
const KIND = "constref";

/**
 * A constant reference
 * @constructor ConstRef
 * @extends {Expression}
 * @property {String|Node} name
 */
const ConstRef = Expr.extends(function ConstRef(identifier, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.name = identifier;
});

module.exports = ConstRef;
