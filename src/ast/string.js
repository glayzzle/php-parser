/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "string";

/**
 * Defines a string (simple ou double quoted) - chars are already escaped
 * @constructor String
 * @extends {Literal}
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 */
const String = Literal.extends(function String(
  isDoubleQuote,
  value,
  raw,
  docs,
  location
) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.isDoubleQuote = isDoubleQuote;
});

module.exports = String;
