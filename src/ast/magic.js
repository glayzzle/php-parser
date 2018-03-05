/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "magic";

/**
 * Defines magic constant
 * @constructor Magic
 * @extends {Literal}
 */
const Magic = Literal.extends(function Magic(value, raw, docs, location) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
});

module.exports = Magic;
