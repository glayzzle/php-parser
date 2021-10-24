/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "isset";

/**
 * Defines an isset call
 * @constructor Isset
 * @memberOf module:php-parser
 * @extends {Expression}
 */
module.exports = Expression.extends(
  KIND,
  function Isset(variables, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.variables = variables;
  }
);
