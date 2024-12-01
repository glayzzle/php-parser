/**
 * Copyright (C) 2024 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "propertyhook";

/**
 * Defines a class property getter & setts
 * @constructor PropertyHook
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {string} name
 * @property {Block|Statement} body
 */
module.exports = Statement.extends(
  KIND,
  function PropertyHook(name, body, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.name = name;
    this.body = body;
  },
);
