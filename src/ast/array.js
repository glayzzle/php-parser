/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Expr = require('./expression');
var KIND = 'array';

/**
 * Defines an array structure
 * @constructor Array
 * @example
 * [1, 2, 3]
 * {
 *  "kind": "array",
 *  "shortForm": true
 *  "items": [{
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "1"}
 *  }, {
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "2"}
 *  }, {
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "3"}
 *  }]
 * }
 * @extends {Expression}
 * @property {Entry[]} items
 * @property {boolean} shortForm
 */
var Array = Expr.extends(function Array(shortForm, items, location) {
  Expr.apply(this, [KIND, location]);
  this.items = items;
  this.shortForm = shortForm;
});

module.exports = Array;
