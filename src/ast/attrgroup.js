/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "attrgroup";

/**
 * Attribute group
 * @memberOf module:php-parser
 * @constructor AttrGroup
 * @extends {Node}
 * @property {Attribute[]} attrs
 */
module.exports = Node.extends(KIND, function AttrGroup(attrs, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.attrs = attrs || [];
});
