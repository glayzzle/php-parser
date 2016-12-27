/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Node = require('./node');
var KIND = 'doc';

/**
 * A comment or documentation
 * @constructor Documentation
 * @extends {Node}
 * @property {Boolean} isDoc
 * @property {String} text
 */
var Documentation = Node.extends(function Documentation(text, location) {
  Node.apply(this, [KIND, location]);
  this.isDoc = text.substring(0, 2) === '/*';
  this.text = text;
});

module.exports = Statement;
