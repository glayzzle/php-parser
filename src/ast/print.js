/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Sys = require("./sys");
const KIND = "print";

/**
 * Outputs
 * @constructor Print
 * @extends {Sys}
 */
const Print = Sys.extends(function Print(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Print;
