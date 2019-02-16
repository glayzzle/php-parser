/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "property";

/**
 * Defines a class property
 * @constructor Property
 * @extends {Statement}
 * @property {string} name
 * @property {Node|null} value
 */
module.exports = Statement.extends(KIND, function Property(
  name,
  value,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.value = value;
});
