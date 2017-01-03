/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'while';

/**
 * Defines a while statement
 * @constructor While
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 * @property {boolean} shortForm
 */
var While = Statement.extends(function While(test, body, shortForm, location) {
  Statement.apply(this, [KIND, location]);
  this.test = test;
  this.body = body;
  this.shortForm = shortForm;
});

module.exports = While;
