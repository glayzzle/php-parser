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
 * @extends {ConstantStatement}
 * @property {string} visibility
 */
const ClassConstant = ConstantStatement.extends(KIND, function ClassConstant(
  kind,
  constants,
  flags,
  docs,
  location
) {
  ConstantStatement.apply(this, [kind || KIND, constants, docs, location]);
  this.parseFlags(flags);
});

/**
 * Generic flags parser
 * @param {Integer[]} flags
 * @return {void}
 */
ClassConstant.prototype.parseFlags = function(flags) {
  if (flags[0] === -1) {
    this.visibility = IS_UNDEFINED;
  } else if (flags[0] === null) {
    this.visibility = null;
  } else if (flags[0] === 0) {
    this.visibility = IS_PUBLIC;
  } else if (flags[0] === 1) {
    this.visibility = IS_PROTECTED;
  } else if (flags[0] === 2) {
    this.visibility = IS_PRIVATE;
  }
};

module.exports = ClassConstant;
