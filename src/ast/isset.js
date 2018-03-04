/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Sys = require("./sys");
const KIND = "isset";

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
const Isset = Sys.extends(function Isset(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Isset;
