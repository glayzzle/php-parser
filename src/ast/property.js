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
 * @property {boolean} nullable
 * @property {Identifier|Array<Identifier>|null} type
 */
module.exports = Statement.extends(KIND, function Property(
  name,
  value,
  nullable,
  type,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.value = value;
  this.nullable = nullable;
  this.type = type;
});
