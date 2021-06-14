/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "string";

/**
 * Defines a string (simple ou double quoted) - chars are already escaped
 * @constructor String
 * @extends {Literal}
 * @property {boolean} unicode
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 */
module.exports = Literal.extends(KIND, function String(
  isDoubleQuote,
  value,
  unicode,
  raw,
  docs,
  location
) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.unicode = unicode;
  this.isDoubleQuote = isDoubleQuote;
});
