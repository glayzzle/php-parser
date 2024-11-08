/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "if";

/**
 * Defines a if statement
 * @constructor If
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {Block|If|null} alternate
 * @property {boolean} shortForm
 */
module.exports = Statement.extends(
  KIND,
  function If(test, body, alternate, shortForm, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.test = test;
    this.body = body;
    this.alternate = alternate;
    this.shortForm = shortForm;
  },
);
