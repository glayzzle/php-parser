/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "arrowfunc";

/**
 * Defines an arrow function (it's like a closure)
 * @constructor ArrowFunc
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Parameter[]} arguments
 * @property {Identifier} type
 * @property {Expression} body
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {boolean} isStatic
 */
module.exports = Expression.extends(
  KIND,
  function Closure(
    args,
    byref,
    body,
    type,
    nullable,
    isStatic,
    docs,
    location,
  ) {
    Expression.apply(this, [KIND, docs, location]);
    this.arguments = args;
    this.byref = byref;
    this.body = body;
    this.type = type;
    this.nullable = nullable;
    this.isStatic = isStatic || false;
  },
);
