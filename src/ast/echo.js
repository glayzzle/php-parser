/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "echo";

/**
 * Defines system based call
 * @constructor Echo
 * @memberOf module:php-parser
 * @property {boolean} shortForm
 * @property {Expression[]} expressions
 * @extends {Statement}
 */
module.exports = Statement.extends(
  KIND,
  function Echo(expressions, shortForm, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.shortForm = shortForm;
    this.expressions = expressions;
  },
);
