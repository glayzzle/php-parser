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
 * @property {boolean} nullable
 * @property {TypeReference|IntersectionType|UnionType|null} type
 */
module.exports = Node.extends(
  KIND,
  function Constant(name, value, nullable, type, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.name = name;
    this.value = value;
    this.nullable = nullable;
    this.type = type;
  },
);
