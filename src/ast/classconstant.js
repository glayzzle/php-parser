/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const ConstantStatement = require("./constantstatement");
const KIND = "classconstant";

/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @memberOf module:php-parser
 * @extends {ConstantStatement}
 * @property {string} visibility
 * @property {boolean} final
 * @property {boolean} nullable
 * @property {TypeReference|IntersectionType|UnionType|null} type
 * @property {AttrGroup[]} attrGroups
 */
const ClassConstant = ConstantStatement.extends(
  KIND,
  function ClassConstant(
    kind,
    constants,
    flags,
    nullable,
    type,
    attrGroups,
    docs,
    location,
  ) {
    ConstantStatement.apply(this, [kind || KIND, constants, docs, location]);
    this.nullable = nullable;
    this.type = type;
    this.attrGroups = attrGroups;
    this.visibility = flags.compute_visibility;
    this.final = flags.isFinal;
  },
);

module.exports = ClassConstant;
