/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Statement = require("./statement");
const KIND = "usegroup";

/**
 * Defines a use statement (with a list of use items)
 * @constructor UseGroup
 * @extends {Statement}
 * @property {String|null} name
 * @property {String|null} type - Possible value : function, const
 * @property {UseItem[]} item
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
const UseGroup = Statement.extends(function UseGroup(
  name,
  type,
  items,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.name = name;
  this.type = type;
  this.items = items;
});

module.exports = UseGroup;
