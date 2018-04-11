/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "nowdoc";

/**
 * Defines a nowdoc string
 * @constructor String
 * @extends {Literal}
 * @property {String} label
 * @property {String} raw
 * @property {Boolean} quote
 */
const Nowdoc = Literal.extends(function Nowdoc(
  value,
  raw,
  label,
  quote,
  docs,
  location
) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.label = label;
  this.quote = quote;
});

module.exports = Nowdoc;
