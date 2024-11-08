/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "list";

/**
 * Defines list assignment
 * @constructor List
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {boolean} shortForm
 * @property {Entry[]} items
 */
module.exports = Expression.extends(
  KIND,
  function List(items, shortForm, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.items = items;
    this.shortForm = shortForm;
  },
);
