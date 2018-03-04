/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Sys = require("./sys");
const KIND = "unset";

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Sys}
 */
const Unset = Sys.extends(function Unset(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = Unset;
