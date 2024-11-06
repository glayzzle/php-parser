/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "staticvariable";

/**
 * Defines a constant
 * @constructor StaticVariable
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Variable} variable
 * @property {Node|string|number|boolean|null} defaultValue
 */
module.exports = Node.extends(
  KIND,
  function StaticVariable(variable, defaultValue, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.variable = variable;
    this.defaultValue = defaultValue;
  },
);
