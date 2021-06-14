/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "unset";

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Statement}
 */
module.exports = Statement.extends(KIND, function Unset(
  variables,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.variables = variables;
});
