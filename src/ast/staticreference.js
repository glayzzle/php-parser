/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "staticreference";

/**
 * Defines a class reference node
 * @constructor StaticReference
 * @extends {Reference}
 */
const StaticReference = Reference.extends(KIND, function StaticReference(
  raw,
  docs,
  location
) {
  Reference.apply(this, [KIND, docs, location]);
  this.raw = raw;
});
module.exports = StaticReference;
