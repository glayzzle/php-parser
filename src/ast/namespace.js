/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Block = require("./block");
const KIND = "namespace";

/**
 * The main program node
 * @constructor Namespace
 * @memberOf module:php-parser
 * @extends {Block}
 * @property {string} name
 * @property {boolean} withBrackets
 */
module.exports = Block.extends(
  KIND,
  function Namespace(name, children, withBrackets, docs, location) {
    Block.apply(this, [KIND, children, docs, location]);
    this.name = name;
    this.withBrackets = withBrackets || false;
  },
);
