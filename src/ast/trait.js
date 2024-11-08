/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "trait";

/**
 * A trait definition
 * @constructor Trait
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Declaration[]} body
 */
module.exports = Declaration.extends(
  KIND,
  function Trait(name, body, docs, location) {
    Declaration.apply(this, [KIND, name, docs, location]);
    this.body = body;
  },
);
