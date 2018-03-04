/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Sys = require("./sys");
const KIND = "list";

/**
 * Defines list assignment
 * @constructor List
 * @extends {Sys}
 */
const List = Sys.extends(function List(args, docs, location) {
  Sys.apply(this, [KIND, args, docs, location]);
});

module.exports = List;
