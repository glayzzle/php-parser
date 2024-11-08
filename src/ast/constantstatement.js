/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "constantstatement";

/**
 * Declares a constants into the current scope
 * @constructor ConstantStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Constant[]} constants
 */
module.exports = Statement.extends(
  KIND,
  function ConstantStatement(kind, constants, docs, location) {
    Statement.apply(this, [kind || KIND, docs, location]);
    this.constants = constants;
  },
);
