/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "constant";

/**
 * Defines a constant
 * @constructor Constant
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} name
 * @property {Node|string|number|boolean|null} value
 */
module.exports = Node.extends(
  KIND,
  function Constant(name, value, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.name = name;
    this.value = value;
  }
);
