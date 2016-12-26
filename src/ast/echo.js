/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'echo';

/**
 * Defines system based call
 * @constructor Sys
 * @extends {Statement}
 * @property {Node[]} arguments
 */
var Echo = Sys.extends(function Echo(args, location) {
  Sys.apply(this, [kind, args, location]);
});

module.exports = Echo;
