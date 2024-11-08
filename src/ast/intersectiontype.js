/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "intersectiontype";

/**
 * A union of types
 * @memberOf module:php-parser
 * @constructor IntersectionType
 * @extends {Declaration}
 * @property {TypeReference[]} types
 */
module.exports = Declaration.extends(
  KIND,
  function IntersectionType(types, docs, location) {
    Declaration.apply(this, [KIND, null, docs, location]);
    this.types = types;
  },
);
