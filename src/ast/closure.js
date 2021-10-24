/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "closure";

/**
 * Defines a closure
 * @constructor Closure
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Parameter[]} arguments
 * @property {Variable[]} uses
 * @property {Identifier} type
 * @property {Boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 * @property {boolean} isStatic
 * @property {AttrGroup[]} attrGroups
 */
module.exports = Expression.extends(
  KIND,
  function Closure(
    args,
    byref,
    uses,
    type,
    nullable,
    isStatic,
    docs,
    location
  ) {
    Expression.apply(this, [KIND, docs, location]);
    this.uses = uses;
    this.arguments = args;
    this.byref = byref;
    this.type = type;
    this.nullable = nullable;
    this.isStatic = isStatic || false;
    this.body = null;
    this.attrGroups = [];
  }
);
