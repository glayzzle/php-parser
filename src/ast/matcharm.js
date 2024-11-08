/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "matcharm";

/**
 * An array entry - see [Array](#array)
 * @memberOf module:php-parser
 * @constructor MatchArm
 * @extends {Expression}
 * @property {Expression[]|null} conds The match condition expression list - null indicates default arm
 * @property {Expression} body The return value expression
 */
module.exports = Expression.extends(
  KIND,
  function MatchArm(conds, body, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.conds = conds;
    this.body = body;
  },
);
