/**
 * Copyright (C) 2024 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "propertyhook";

/**
 * Defines a class property hook getter & setter
 *
 * @constructor PropertyHook
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} name
 * @property {Boolean} isFinal
 * @property {Boolean} byref
 * @property {Parameter|null} parameter
 * @property {Block|Statement} body
 */
module.exports = Statement.extends(
  KIND,
  function PropertyHook(name, isFinal, byref, parameter, body, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.name = name;
    this.byref = byref;
    this.parameter = parameter;
    this.body = body;
    this.isFinal = isFinal;
  },
);
