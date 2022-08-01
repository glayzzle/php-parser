/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "while";

/**
 * Defines a while statement
 * @constructor While
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block | null} body
 * @property {boolean} shortForm
 */
module.exports = Statement.extends(
  KIND,
  function While(test, body, shortForm, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.test = test;
    this.body = body;
    this.shortForm = shortForm;
  }
);
