/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'string';

/**
 * Defines a string (simple ou double quoted) - chars are already escaped
 * @constructor String
 * @extends {Literal}
 * @property {boolean} isDoubleQuote
 * @see {Encapsed}
 */
var String = Literal.extends(function String(isDoubleQuote, value, location) {
  Literal.apply(this, [KIND, value, location]);
  this.isDoubleQuote = isDoubleQuote;
});

module.exports = String;
