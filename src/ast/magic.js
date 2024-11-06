/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "magic";

/**
 * Defines magic constant
 * @constructor Magic
 * @memberOf module:php-parser
 * @extends {Literal}
 */
module.exports = Literal.extends(
  KIND,
  function Magic(value, raw, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
  },
);
