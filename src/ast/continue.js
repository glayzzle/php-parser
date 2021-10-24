/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "continue";

/**
 * A continue statement
 * @constructor Continue
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {number|null} level
 */
module.exports = Statement.extends(
  KIND,
  function Continue(level, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.level = level;
  }
);
