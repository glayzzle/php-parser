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
 * @extends {Operation}
 * @property {String} type
 * @property {String} raw
 * @property {Expression} what
 */
module.exports = Operation.extends(KIND, function Cast(
  type,
  raw,
  what,
  docs,
  location
) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.raw = raw;
  this.what = what;
});
