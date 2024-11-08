/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "string";

/**
 * Defines a string (simple or double quoted) - chars are already escaped
 * @constructor String
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {boolean} unicode
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 * @property {string} value
 */
module.exports = Literal.extends(
  KIND,
  function String(isDoubleQuote, value, unicode, raw, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
    this.unicode = unicode;
    this.isDoubleQuote = isDoubleQuote;
  },
);
