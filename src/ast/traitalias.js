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
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {Identifier} method
 * @property {Identifier|null} as
 * @property {string|null} visibility
 */
module.exports = Node.extends(
  KIND,
  function TraitAlias(trait, method, as, flags, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.trait = trait;
    this.method = method;
    this.as = as;
    this.visibility = IS_UNDEFINED;
    if (flags) {
      const getVis = flags[0][0];
      if (getVis === 0) {
        this.visibility = IS_PUBLIC;
      } else if (getVis === 1) {
        this.visibility = IS_PROTECTED;
      } else if (getVis === 2) {
        this.visibility = IS_PRIVATE;
      }
    }
  },
);
