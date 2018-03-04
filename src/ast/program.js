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
 * @property {Doc[]?} comments
 */
const Program = Block.extends(function Program(
  children,
  errors,
  comments,
  docs,
  location
) {
  Block.apply(this, [KIND, children, docs, location]);
  this.errors = errors;
  if (comments) {
    this.comments = comments;
  }
});

module.exports = Program;
