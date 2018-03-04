/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Statement = require("./statement");
const KIND = "sys";

/**
 * Defines system based call
 * @constructor Sys
 * @extends {Statement}
 * @property {Node[]} arguments
 */
const Sys = Statement.extends(function Sys(kind, args, docs, location) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.arguments = args;
});

module.exports = Sys;
