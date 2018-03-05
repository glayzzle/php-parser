/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "inline";

/**
 * Defines inline html output (treated as echo output)
 * @constructor Inline
 * @extends {Literal}
 */
const Inline = Literal.extends(function Inline(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Inline;
