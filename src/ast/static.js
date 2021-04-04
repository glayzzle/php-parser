/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "static";

/**
 * Declares a static variable into the current scope
 * @constructor Static
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {StaticVariable[]} variables
 */
module.exports = Statement.extends(
  KIND,
  function Static(variables, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.variables = variables;
  }
);
