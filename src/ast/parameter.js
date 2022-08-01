/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "parameter";

/**
 * @memberOf module:php-parser
 * @typedef {1} MODIFIER_PUBLIC
 **/
/**
 * @memberOf module:php-parser
 * @typedef {2} MODIFIER_PROTECTED
 **/
/**
 * @memberOf module:php-parser
 * @typedef {4} MODIFIER_PRIVATE
 **/
/**
 * Defines a function parameter
 * @constructor Parameter
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} type
 * @property {Node|null} value
 * @property {boolean} byref
 * @property {boolean} variadic
 * @property {boolean} readonly
 * @property {boolean} nullable
 * @property {AttrGroup[]} attrGroups
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
    readonly,
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
    this.readonly = readonly;
    this.nullable = nullable;
    this.flags = flags || 0;
    this.attrGroups = [];
  }
);
