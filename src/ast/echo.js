/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Sys = require("./sys");
const KIND = "echo";

/**
 * Defines system based call
 * @constructor Echo
 * @property {boolean} shortForm
 * @extends {Sys}
 */
const Echo = Sys.extends(function Echo(args, shortForm, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
  this.shortForm = shortForm;
});

module.exports = Echo;
