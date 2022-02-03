/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "enumcase";

/**
 * Declares a cases into the current scope
 * @constructor EnumCase
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} name
 * @property {string|number|null} value
 */
module.exports = Node.extends(
  KIND,
  function EnumCase(name, value, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.name = name;
    this.value = value;
  }
);
