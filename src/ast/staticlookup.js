/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Lookup = require("./lookup");
const KIND = "staticlookup";

/**
 * Lookup to a static property
 * @constructor StaticLookup
 * @extends {Lookup}
 */
module.exports = Lookup.extends(KIND, function StaticLookup(
  what,
  offset,
  docs,
  location
) {
  Lookup.apply(this, [KIND, what, offset, docs, location]);
});
