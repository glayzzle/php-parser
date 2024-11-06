/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "interface";

/**
 * An interface definition
 * @constructor Interface
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier[]} extends
 * @property {Declaration[]} body
 * @property {AttrGroup[]} attrGroups
 */
module.exports = Declaration.extends(
  KIND,
  function Interface(name, ext, body, attrGroups, docs, location) {
    Declaration.apply(this, [KIND, name, docs, location]);
    this.extends = ext;
    this.body = body;
    this.attrGroups = attrGroups;
  },
);
