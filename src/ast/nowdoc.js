/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "nowdoc";

/**
 * Defines a nowdoc string
 * @constructor NowDoc
 * @extends {Literal}
 * @property {String} label
 * @property {String} raw
 * @property {Boolean} quote
 */
module.exports = Literal.extends(KIND, function Nowdoc(
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
