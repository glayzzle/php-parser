/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "property";

/**
 * Defines a class property
 * @constructor Property
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} name
 * @property {Node|null} value
 * @property {boolean} readonly
 * @property {boolean} nullable
 * @property {Identifier|Array<Identifier>|null} type
 * @property {AttrGroup[]} attrGroups
 */
module.exports = Statement.extends(
  KIND,
  function Property(
    name,
    value,
    readonly,
    nullable,
    type,
    attrGroups,
    docs,
    location
  ) {
    Statement.apply(this, [KIND, docs, location]);
    this.name = name;
    this.value = value;
    this.readonly = readonly;
    this.nullable = nullable;
    this.type = type;
    this.attrGroups = attrGroups;
  }
);
