/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "traituse";

/**
 * Defines a trait usage
 * @constructor TraitUse
 * @extends {Node}
 * @property {Identifier[]} traits
 * @property {Node[]|null} adaptations
 */
module.exports = Node.extends(KIND, function TraitUse(
  traits,
  adaptations,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  this.traits = traits;
  this.adaptations = adaptations;
});
