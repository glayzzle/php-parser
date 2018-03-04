/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Statement = require("./statement");
const KIND = "global";

/**
 * Imports a variable from the global scope
 * @constructor Global
 * @extends {Statement}
 * @property {Variable[]} items
 */
const Global = Statement.extends(function Global(items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.items = items;
});

module.exports = Global;
