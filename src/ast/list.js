/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Sys = require("./sys");
const KIND = "list";

/**
 * Defines list assignment
 * @constructor List
 * @extends {Sys}
 * @property {boolean} shortForm
 */
module.exports = Sys.extends(KIND, function List(
  items,
  shortForm,
  docs,
  location
) {
  Sys.apply(this, [KIND, items, docs, location]);
  this.shortForm = shortForm;
});
