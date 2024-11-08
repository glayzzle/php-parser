/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Block = require("./block");
const KIND = "program";

/**
 * The main program node
 * @constructor Program
 * @memberOf module:php-parser
 * @extends {Block}
 * @property {Error[]} errors
 * @property {Comment[]|null} comments
 * @property {String[]|null} tokens
 */
module.exports = Block.extends(
  KIND,
  function Program(children, errors, comments, tokens, docs, location) {
    Block.apply(this, [KIND, children, docs, location]);
    this.errors = errors;
    if (comments) {
      this.comments = comments;
    }
    if (tokens) {
      this.tokens = tokens;
    }
  },
);
