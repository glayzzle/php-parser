/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "attribute";

/**
 * Attribute Value
 * @memberOf module:php-parser
 * @constructor Attribute
 * @extends {Node}
 * @property {String} name
 * @property {Parameter[]} args
 */
module.exports = Node.extends(
  KIND,
  function Attribute(name, args, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.name = name;
    this.args = args;
  }
);
