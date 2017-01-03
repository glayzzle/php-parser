/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'foreach';

/**
 * Defines a foreach iterator
 * @constructor Foreach
 * @extends {Statement}
 * @property {Expression} source
 * @property {Expression|null} key
 * @property {Expression} value
 * @property {Statement} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.foreach.php
 */
var Foreach = Statement.extends(function Foreach(source, key, value, body, shortForm, location) {
  Statement.apply(this, [KIND, location]);
  this.source = source;
  this.key = key;
  this.value = value;
  this.shortForm = shortForm;
  this.body = body;
});

module.exports = Foreach;
