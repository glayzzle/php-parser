/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const ConstantStatement = require("./constantstatement");
const KIND = "classconstant";

const IS_UNDEFINED = "";
const IS_PUBLIC = "public";
const IS_PROTECTED = "protected";
const IS_PRIVATE = "private";

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
    this.parseFlags(flags);
    this.nullable = nullable;
    this.type = type;
    this.attrGroups = attrGroups;
  },
);

/**
 * Generic flags parser
 * @function
 * @name ClassConstant#parseFlags
 * @memberOf module:php-parser
 * @param {Array<number|null>} flags
 * @return {void}
 */
ClassConstant.prototype.parseFlags = function (flags) {
  const getVis = flags[0][0];
  if (getVis === -1) {
    this.visibility = IS_UNDEFINED;
  } else if (getVis === null) {
    /* istanbul ignore next */
    this.visibility = null;
  } else if (getVis === 0) {
    this.visibility = IS_PUBLIC;
  } else if (getVis === 1) {
    this.visibility = IS_PROTECTED;
  } else if (getVis === 2) {
    this.visibility = IS_PRIVATE;
  }
  this.final = flags[2] === 2;
};

module.exports = ClassConstant;
