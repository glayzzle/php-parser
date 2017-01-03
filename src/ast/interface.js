/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Declaration = require('./declaration');
var KIND = 'interface';


/**
 * An interface definition
 * @constructor Interface
 * @extends {Declaration}
 * @property {Identifier[]} extends
 * @property {Declaration[]} body
 */
var Interface = Declaration.extends(function Interface(name, ext, body, location) {
  Declaration.apply(this, [KIND, name, location]);
  this.extends = ext;
  this.body = body;
});

module.exports = Interface;
