/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "eval";

/**
 * Defines an eval statement
 * @constructor Eval
 * @extends {Statement}
 * @property {Node} source
 */
const Eval = Statement.extends(function Eval(source, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.source = source;
});

module.exports = Eval;
