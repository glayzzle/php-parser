/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
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
const Call = Statement.extends(function Call(what, args, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.what = what;
  this.arguments = args;
});

module.exports = Call;
