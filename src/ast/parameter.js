/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "parameter";

// eslint-disable-next-line no-unused-vars
const MODIFIER_PUBLIC = 1;
// eslint-disable-next-line no-unused-vars
const MODIFIER_PROTECTED = 2;
// eslint-disable-next-line no-unused-vars
const MODIFIER_PRIVATE = 4;

/**
 * Defines a function parameter
 * @constructor Parameter
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} type
 * @property {Node|null} value
 * @property {boolean} byref
 * @property {boolean} variadic
 * @property {boolean} nullable
 * @property {AttrGroups[]} attrGroups
 * @property {MODIFIER_PUBLIC|MODIFIER_PROTECTED|MODIFIER_PRIVATE} flags
 */
module.exports = Declaration.extends(
  KIND,
  function Parameter(
    name,
    type,
    value,
    isRef,
    isVariadic,
    nullable,
    flags,
    docs,
    location
  ) {
    Declaration.apply(this, [KIND, name, docs, location]);
    this.value = value;
    this.type = type;
    this.byref = isRef;
    this.variadic = isVariadic;
    this.nullable = nullable;
    this.flags = flags || 0;
    this.attrGroups = [];
  }
);
