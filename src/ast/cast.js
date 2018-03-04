/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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
 * @property {Expression} what
 */
const Cast = Operation.extends(function Cast(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Cast;
