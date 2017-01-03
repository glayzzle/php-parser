/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

var Operation = require('./operation');
var KIND = 'pre';

/**
 * Defines a pre operation `++$i` or `--$i`
 * @constructor Pre
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
var Pre = Operation.extends(function Pre(type, what, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.what = what;
});

module.exports = Pre;
