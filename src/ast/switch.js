/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'switch';

/**
 * Defines a switch statement
 * @constructor Switch
 * @extends {Statement}
 * @property {Expression} test
 * @property {Block} body
 * @property {boolean} shortForm
 */
var Switch = Statement.extends(function Switch(test, body, shortForm, location) {
  Statement.apply(this, [KIND, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

module.exports = Switch;
