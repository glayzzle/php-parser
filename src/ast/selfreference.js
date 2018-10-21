/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "selfreference";

/**
 * Defines a class reference node
 * @constructor SelfReference
 * @extends {Reference}
 */
const SelfReference = Reference.extends(KIND, function SelfReference(
  docs,
  location
) {
  Reference.apply(this, [KIND, docs, location]);
});
module.exports = SelfReference;
