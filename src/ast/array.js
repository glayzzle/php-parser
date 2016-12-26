/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Block = require('./block');
var KIND = 'array';

/**
 * Defines an error structure
 * @constructor Array
 * @extends {Block}
 * @property {boolean} shortForm
 */
module.exports = Block.extends(function Array(shortForm, children, location) {
  Block.apply(this, [KIND, children, location]);
  this.shortForm = shortForm;
});
