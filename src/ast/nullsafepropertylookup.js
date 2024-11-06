/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Lookup = require("./lookup");
const KIND = "nullsafepropertylookup";

/**
 * Lookup to an object property
 * @memberOf module:php-parser
 * @constructor NullSafePropertyLookup
 * @extends {Lookup}
 */
module.exports = Lookup.extends(
  KIND,
  function NullSafePropertyLookup(what, offset, docs, location) {
    Lookup.apply(this, [KIND, what, offset, docs, location]);
  },
);
