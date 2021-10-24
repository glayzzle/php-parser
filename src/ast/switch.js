/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "switch";

/**
 * Defines a switch statement
 * @constructor Switch
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */
module.exports = Statement.extends(
  KIND,
  function Switch(test, body, shortForm, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.test = test;
    this.body = body;
    this.shortForm = shortForm;
  }
);
