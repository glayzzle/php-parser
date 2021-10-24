/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Declaration = require("./declaration");
const KIND = "class";

/**
 * A class definition
 * @constructor Class
 * @memberOf module:php-parser
 * @extends {Declaration}
 * @property {Identifier|null} extends
 * @property {Identifier[]} implements
 * @property {Declaration[]} body
 * @property {AttrGroup[]} attrGroups
 * @property {boolean} isAnonymous
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 */
module.exports = Declaration.extends(
  KIND,
  function Class(name, ext, impl, body, flags, docs, location) {
    Declaration.apply(this, [KIND, name, docs, location]);
    this.isAnonymous = name ? false : true;
    this.extends = ext;
    this.implements = impl;
    this.body = body;
    this.attrGroups = [];
    this.parseFlags(flags);
  }
);
