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
 * @property {String[]} lines
 */
var Doc = Node.extends(function Doc(isDoc, lines, location) {
  Node.apply(this, [KIND, location]);
  this.isDoc = isDoc;
  this.lines = lines;
});

module.exports = Doc;
