/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "enum";

/**
 * A enum definition
 * @constructor Enum
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} valueType
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 * @property {AttrGroup[]} attrGroups
 */
module.exports = Declaration.extends(
  KIND,
  function Enum(name, valueType, impl, body, docs, location) {
    Declaration.apply(this, [KIND, name, docs, location]);
    this.valueType = valueType;
    this.implements = impl;
    this.body = body;
    this.attrGroups = [];
  },
);
