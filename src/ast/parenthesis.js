/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "parenthesis";

/**
 * Parenthesis encapsulation `(... expr ...)`
 * @constructor Parenthesis
 * @extends {Operation}
 * @property {Expression} inner
 */
const Parenthesis = Operation.extends(function Parenthesis(
  inner,
  docs,
  location
) {
  Operation.apply(this, [KIND, docs, location]);
  this.inner = inner;
});

module.exports = Parenthesis;
