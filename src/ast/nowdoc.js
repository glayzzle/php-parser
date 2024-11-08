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
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {string} label
 * @property {string} raw
 * @property {string} value
 */
module.exports = Literal.extends(
  KIND,
  function Nowdoc(value, raw, label, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
    this.label = label;
  },
);
