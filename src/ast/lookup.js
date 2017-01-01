/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'lookup';

/**
 * Lookup on an offset in the specified object
 * @constructor Lookup
 * @extends {Expression}
 * @property {Expression} what
 * @property {Expression} offset
 */
var Lookup = Expr.extends(function Lookup(kind, what, offset, location) {
  Expr.apply(this, [kind || KIND, location]);
  this.what = what;
  this.offset = offset;
});

module.exports = Lookup;
