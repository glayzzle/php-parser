/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Declaration = require("./declaration");
const KIND = "interface";

/**
 * An interface definition
 * @constructor Interface
 * @extends {Declaration}
 * @property {Identifier[]} extends
 * @property {Declaration[]} body
 */
const Interface = Declaration.extends(function Interface(
  name,
  ext,
  body,
  docs,
  location
) {
  Declaration.apply(this, [KIND, name, docs, location]);
  this.extends = ext;
  this.body = body;
});

module.exports = Interface;
