/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "cast";

/**
 * Binary operations
 * @constructor Cast
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {String} raw
 * @property {Expression} expr
 */
module.exports = Operation.extends(
  KIND,
  function Cast(type, raw, expr, docs, location) {
    Operation.apply(this, [KIND, docs, location]);
    this.type = type;
    this.raw = raw;
    this.expr = expr;
  }
);
