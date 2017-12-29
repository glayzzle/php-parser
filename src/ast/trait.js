/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Declaration = require("./declaration");
const KIND = "trait";

/**
 * A trait definition
 * @constructor Trait
 * @extends {Declaration}
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 */
const Trait = Declaration.extends(function Trait(
  name,
  ext,
  impl,
  body,
  location
) {
  Declaration.apply(this, [KIND, name, location]);
  this.extends = ext;
  this.implements = impl;
  this.body = body;
});

module.exports = Trait;
