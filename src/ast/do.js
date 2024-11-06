/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "do";

/**
 * Defines a do/while statement
 * @constructor Do
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block | null} body
 */
module.exports = Statement.extends(
  KIND,
  function Do(test, body, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.test = test;
    this.body = body;
  },
);
