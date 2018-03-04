/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Expr = require("./expression");
const KIND = "array";

/**
 * Defines an array structure
 * @constructor Array
 * @example
 * // PHP code :
 * [1, 'foo' => 'bar', 3]
 *
 * // AST structure :
 * {
 *  "kind": "array",
 *  "shortForm": true
 *  "items": [{
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "1"}
 *  }, {
 *    "kind": "entry",
 *    "key": {"kind": "string", "value": "foo", "isDoubleQuote": false},
 *    "value": {"kind": "string", "value": "bar", "isDoubleQuote": false}
 *  }, {
 *    "kind": "entry",
 *    "key": null,
 *    "value": {"kind": "number", "value": "3"}
 *  }]
 * }
 * @extends {Expression}
 * @property {Entry[]} items List of array items
 * @property {boolean} shortForm Indicate if the short array syntax is used, ex `[]` instead `array()`
 */
const Array = Expr.extends(function Array(shortForm, items, docs, location) {
  Expr.apply(this, [KIND, docs, location]);
  this.items = items;
  this.shortForm = shortForm;
});

module.exports = Array;
