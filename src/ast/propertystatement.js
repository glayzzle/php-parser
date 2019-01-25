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

/**
 * Declares a properties into the current scope
 * @constructor PropertyStatement
 * @extends {Statement}
 * @property {Property[]} properties
 */
const PropertyStatement = Statement.extends(KIND, function PropertyStatement(
  kind,
  properties,
  flags,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.properties = properties;
  this.parseFlags(flags);
});

/**
 * Generic flags parser
 * @param {Integer[]} flags
 * @return {void}
 */
PropertyStatement.prototype.parseFlags = function(flags) {
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

  this.isStatic = flags[1] === 1;
};

module.exports = PropertyStatement;
