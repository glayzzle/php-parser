/**
 * Copyright (C) 2024 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "propertyhook";

/**
 * Defines a class property hook getter & setter
 *
 * @constructor PropertyHook
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {string} name
 * @property {Boolean} isFinal
 * @property {Boolean} byref
 * @property {Parameter|null} parameter
 * @property {Block|Expression|null} body
 * @property {AttrGroup[]} attrGroups
 */
module.exports = Node.extends(
  KIND,
  function PropertyHook(
    name,
    isFinal,
    byref,
    parameter,
    body,
    attrGroups,
    docs,
    location,
  ) {
    Node.apply(this, [KIND, docs, location]);
    this.name = name;
    this.isFinal = isFinal;
    this.byref = byref;
    this.parameter = parameter;
    this.body = body;
    this.attrGroups = attrGroups || [];
  },
);
