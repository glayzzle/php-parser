/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'nowdoc';

/**
 * Defines a nowdoc string
 * @constructor String
 * @extends {Literal}
 * @property {String} label

 */
var Nowdoc = Literal.extends(function Nowdoc(value, label, location) {
  Literal.apply(this, [KIND, value, location]);
  this.label = label;
});

module.exports = Nowdoc;
