/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Statement = require("./statement");
const KIND = "static";

/**
 * Declares a static variable into the current scope
 * @constructor Static
 * @extends {Statement}
 * @property {Variable[]|Assign[]} items
 */
const Static = Statement.extends(function Static(items, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.items = items;
});

module.exports = Static;
