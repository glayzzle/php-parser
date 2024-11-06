/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "block";

/**
 * A block statement, i.e., a sequence of statements surrounded by braces.
 * @constructor Block
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Node[]} children
 */
module.exports = Statement.extends(
  KIND,
  function Block(kind, children, docs, location) {
    Statement.apply(this, [kind || KIND, docs, location]);
    this.children = children.filter(Boolean);
  },
);
