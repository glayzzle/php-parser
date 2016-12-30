/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Statement = require('./statement');
var KIND = 'new';

/**
 * Creates a new instance of the specified class
 * @constructor New
 * @extends {Statement}
 * @property {Identifier|Variable|Class} what
 * @property {Arguments[]} arguments
 */
var New = Statement.extends(function New(what, args, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
  this.arguments = args;
});

module.exports = New;
