/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "constant";

/**
 * Defines a namespace constant
 * @constructor Constant
 * @extends {Declaration}
 * @property {Node|null} value
 */
module.exports = Declaration.extends(KIND, function Constant(
  name,
  value,
  docs,
  location
) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
});
