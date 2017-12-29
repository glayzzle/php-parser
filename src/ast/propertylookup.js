/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Lookup = require("./lookup");
const KIND = "propertylookup";

/**
 * Lookup to an object property
 * @constructor PropertyLookup
 * @extends {Lookup}
 */
const PropertyLookup = Lookup.extends(function PropertyLookup(
  what,
  offset,
  location
) {
  Lookup.apply(this, [KIND, what, offset, location]);
});

module.exports = PropertyLookup;
