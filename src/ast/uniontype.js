/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "uniontype";

/**
 * A union of types
 * @memberOf module:php-parser
 * @constructor UnionType
 * @extends {Declaration}
 * @property {TypeReference[]} types
 */
module.exports = Declaration.extends(
  KIND,
  function UnionType(types, docs, location) {
    Declaration.apply(this, [KIND, null, docs, location]);
    this.types = types;
  },
);
