/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "propertystatement";

/**
 * Declares a properties into the current scope
 * @constructor PropertyStatement
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Property[]} properties
 * @property {string|null} visibility
 * @property {boolean} isStatic
 */
const PropertyStatement = Statement.extends(
  KIND,
  function PropertyStatement(kind, properties, flags, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.properties = properties;
    this.visibility = flags.compute_visibility;
    this.isStatic = flags.isStatic;
  },
);

module.exports = PropertyStatement;
