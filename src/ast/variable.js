/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Expr = require('./expression');
var KIND = 'variable';

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @extends {Expression}
 * @property {String|Node} name
 * @property {boolean} byref
 */
var Variable = Expr.extends(function Variable(name, byref, location) {
  Expr.apply(this, [KIND, location]);
  this.name = name;
  this.byref = byref || false;
});

module.exports = Variable;
