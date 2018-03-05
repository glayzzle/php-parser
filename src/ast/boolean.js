/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "boolean";

/**
 * Defines a boolean value (true/false)
 * @constructor Boolean
 * @extends {Literal}
 */
const Boolean = Literal.extends(function Boolean(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Boolean;
