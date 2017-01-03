/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'throw';

/**
 * Defines a throw statement
 * @constructor Throw
 * @extends {Statement}
 * @property {Expression} what
 */
var Throw = Statement.extends(function Throw(what, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
});

module.exports = Throw;
