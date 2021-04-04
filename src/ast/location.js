/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

/**
 * Defines the location of the node (with it's source contents as string)
 * @constructor Location
 * @memberOf module:php-parser
 * @property {string|null} source
 * @property {Position} start
 * @property {Position} end
 */
const Location = function (source, start, end) {
  this.source = source;
  this.start = start;
  this.end = end;
};

module.exports = Location;
