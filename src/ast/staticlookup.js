/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Lookup = require('./lookup');
var KIND = 'staticlookup';

/**
 * Lookup to a static property
 * @constructor StaticLookup
 * @extends {Lookup}
 */
var StaticLookup = Lookup.extends(function StaticLookup(what, offset, location) {
  Lookup.apply(this, [KIND, what, offset, location]);
});

module.exports = StaticLookup;
