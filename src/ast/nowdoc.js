/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "nowdoc";

/**
 * Defines a nowdoc string
 * @constructor String
 * @extends {Literal}
 * @property {String} label

 */
const Nowdoc = Literal.extends(function Nowdoc(value, label, docs, location) {
  Literal.apply(this, [KIND, value, docs, location]);
  this.label = label;
});

module.exports = Nowdoc;
