/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'isset';

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
var Isset = Sys.extends(function Isset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Isset;
