/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "label";

/**
 * A label statement (referenced by goto)
 * @constructor Label
 * @extends {Statement}
 * @property {String} name
 */
module.exports = Statement.extends(KIND, function Label(name, docs, location) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
});
