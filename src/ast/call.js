/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "call";

/**
 * Executes a call statement
 * @constructor Call
 * @extends {Statement}
 * @property {Identifier|Variable|??} what
 * @property {Arguments[]} arguments
 */
module.exports = Statement.extends(KIND, function Call(
  what,
  args,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});
