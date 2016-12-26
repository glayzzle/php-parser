/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'unset';

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Sys}
 */
var Unset = Sys.extends(function Unset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Unset;
