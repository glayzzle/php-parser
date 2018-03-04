/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "do";

/**
 * Defines a do/while statement
 * @constructor Do
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 */
const Do = Statement.extends(function Do(test, body, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
});

module.exports = Do;
