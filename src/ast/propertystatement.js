/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "propertystatement";

const IS_UNDEFINED = "";
const IS_PUBLIC = "public";
const IS_PROTECTED = "protected";
const IS_PRIVATE = "private";

const VISIBILITY_MAP = [IS_PUBLIC, IS_PROTECTED, IS_PRIVATE];

/**
 * Declares a properties into the current scope
 * @constructor PropertyStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Property[]} properties
 * @property {string|null} visibility
 * @property {string|null} visibilitySet
 * @property {boolean} isStatic
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */
const PropertyStatement = Statement.extends(
  KIND,
  function PropertyStatement(kind, properties, flags, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.properties = properties;
    this.parseFlags(flags);
  },
);

/**
 * Generic flags parser
 * @function PropertyStatement#parseFlags
 * @memberOf module:php-parser
 * @param {Array<number|null>} flags
 * @return {void}
 */
PropertyStatement.prototype.parseFlags = function (flags) {
  const [getVis, setVis] = flags[0];
  if (getVis === -1) {
    this.visibility = IS_UNDEFINED;
  } else if (getVis === null) {
    this.visibility = null;
  } else {
    this.visibility = VISIBILITY_MAP[getVis];
  }

  this.isStatic = flags[1] === 1;
  this.isAbstract = flags[2] === 1;
  this.isFinal = flags[2] === 2;
  this.visibilitySet = setVis !== -1 ? VISIBILITY_MAP[setVis] : null;
};

module.exports = PropertyStatement;
