/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "switch";

/**
 * Defines a switch statement
 * @constructor Switch
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */
const Switch = Statement.extends(function Switch(
  test,
  body,
  shortForm,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

module.exports = Switch;
