/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Sys = require("./sys");
const KIND = "echo";

/**
 * Defines system based call
 * @constructor Echo
 * @property {boolean} shortForm
 * @extends {Sys}
 */
module.exports = Sys.extends(KIND, function Echo(
  args,
  shortForm,
  docs,
  location
) {
  Sys.apply(this, [KIND, args, docs, location]);
  this.shortForm = shortForm;
});
