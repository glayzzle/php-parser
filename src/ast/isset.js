/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Sys = require("./sys");
const KIND = "isset";

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
module.exports = Sys.extends(KIND, function Isset(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});
