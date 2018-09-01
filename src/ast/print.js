/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Sys = require("./sys");
const KIND = "print";

/**
 * Outputs
 * @constructor Print
 * @extends {Sys}
 */
module.exports = Sys.extends(KIND, function Print(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});
