/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Statement = require("./statement");
const KIND = "closure";

/**
 * Defines a closure
 * @constructor Closure
 * @extends {Statement}
 * @property {Parameter[]} arguments
 * @property {Variable[]} uses
 * @property {Identifier} type
 * @property {boolean} byref
 * @property {boolean} nullable
 * @property {Block|null} body
 * @property {boolean} isStatic
 */
const Closure = Statement.extends(function Closure(
  args,
  byref,
  uses,
  type,
  nullable,
  isStatic,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.uses = uses;
  this.arguments = args;
  this.byref = byref;
  this.type = type;
  this.nullable = nullable;
  this.isStatic = isStatic || false;
  this.body = null;
});

module.exports = Closure;
