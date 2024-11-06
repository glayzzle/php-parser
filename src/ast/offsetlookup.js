/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Lookup = require("./lookup");
const KIND = "offsetlookup";

/**
 * Lookup on an offset in an array
 * @constructor OffsetLookup
 * @memberOf module:php-parser
 * @extends {Lookup}
 */
module.exports = Lookup.extends(
  KIND,
  function OffsetLookup(what, offset, docs, location) {
    Lookup.apply(this, [KIND, what, offset, docs, location]);
  },
);
