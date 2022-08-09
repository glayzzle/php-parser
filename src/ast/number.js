/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "number";

/**
 * Defines a numeric value
 * @constructor Number
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {number} value
 */
module.exports = Literal.extends(
  KIND,
  function Number(value, raw, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
  }
);
