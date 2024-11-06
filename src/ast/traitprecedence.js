/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "traitprecedence";

/**
 * Defines a trait alias
 * @constructor TraitPrecedence
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {Identifier|null} trait
 * @property {Identifier} method
 * @property {Identifier[]} instead
 */
module.exports = Node.extends(
  KIND,
  function TraitPrecedence(trait, method, instead, docs, location) {
    Node.apply(this, [KIND, docs, location]);
    this.trait = trait;
    this.method = method;
    this.instead = instead;
  },
);
