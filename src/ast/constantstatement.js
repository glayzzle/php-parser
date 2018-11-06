/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "constantstatement";

/**
 * Declares a constants into the current scope
 * @constructor ConstantStatement
 * @extends {Statement}
 * @property {Constant[]} items
 */
module.exports = Statement.extends(KIND, function ConstantStatement(
  kind,
  items,
  docs,
  location
) {
  Statement.apply(this, [kind || KIND, docs, location]);
  this.items = items;
});
