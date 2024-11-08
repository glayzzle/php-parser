/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "boolean";

/**
 * Defines a boolean value (true/false)
 * @constructor Boolean
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {boolean} value
 */
module.exports = Literal.extends(
  KIND,
  function Boolean(value, raw, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
  },
);
