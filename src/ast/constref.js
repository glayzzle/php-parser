/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'constref';

/**
 * A constant reference
 * @constructor ConstRef
 * @extends {Expression}
 * @property {String|Node} name
 */
var ConstRef = Expr.extends(function ConstRef(identifier, location) {
  Expr.apply(this, [KIND, location]);
  this.name = identifier;
});

module.exports = ConstRef;
