/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'variable';

/**
 * Any expression node. Since the left-hand side of an assignment may
 * be any expression in general, an expression can also be a pattern.
 * @constructor Variable
 * @extends {Expression}
 * @property {String|Node} identifier
 */
var Variable = Expr.extends(function Variable(identifier, location) {
  Expr.apply(this, [KIND, location]);
  this.identifier = identifier;
});

module.exports = Variable;
