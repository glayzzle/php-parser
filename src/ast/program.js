/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Block = require("./block");
const KIND = "program";

/**
 * The main program node
 * @constructor Program
 * @extends {Block}
 * @property {Error[]} errors
 */
const Program = Block.extends(function Program(children, errors, location) {
  Block.apply(this, [KIND, children, location]);
  this.errors = errors;
});

module.exports = Program;
