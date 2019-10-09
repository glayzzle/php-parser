/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "traitalias";

const IS_UNDEFINED = "";
const IS_PUBLIC = "public";
const IS_PROTECTED = "protected";
const IS_PRIVATE = "private";

/**
 * Defines a trait alias
 * @constructor TraitAlias
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {Identifier} method
 * @property {Identifier|null} as
 * @property {string|null} visibility
 */
module.exports = Node.extends(KIND, function TraitAlias(
  trait,
  method,
  as,
  visibility,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.trait = trait;
  this.method = method;
  this.as = as;

  switch (visibility) {
    case 0:
      this.visibility = IS_PUBLIC;
      break;
    case 1:
      this.visibility = IS_PROTECTED;
      break;
    case 2:
      this.visibility = IS_PRIVATE;
      break;
    default:
      this.visibility = IS_UNDEFINED;
  }
});
