/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Declaration = require("./declaration");
const KIND = "property";

/**
 * Defines a class property
 * @constructor Property
 * @extends {Declaration}
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 * @property {Node|null} value
 */
const Property = Declaration.extends(function Property(
  name,
  value,
  flags,
  location
) {
  Declaration.apply(this, [KIND, name, location]);
  this.value = value;
  this.parseFlags(flags);
});

module.exports = Property;
