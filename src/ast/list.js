/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Sys = require('./sys');
var KIND = 'list';

/**
 * Defines list assignment
 * @constructor List
 * @extends {Sys}
 */
var List = Sys.extends(function List(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = List;
