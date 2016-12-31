/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Statement = require('./statement');
var KIND = 'global';

/**
 * Imports a variable from the global scope
 * @constructor Global
 * @extends {Statement}
 * @property {Variable[]} items
 */
var Global = Statement.extends(function Global(items, location) {
  Statement.apply(this, [KIND, location]);
  this.items = items;
});

module.exports = Global;
