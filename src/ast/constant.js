/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Declaration = require("./declaration");
const KIND = "constant";

/**
 * Defines a namespace constant
 * @constructor Constant
 * @extends {Declaration}
 * @property {Node|null} value
 */
const Constant = Declaration.extends(function Constant(
  name,
  value,
  docs,
  location
) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.value = value;
});

module.exports = Constant;
