/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "doc";

/**
 * A comment or documentation
 * @constructor Documentation
 * @extends {Node}
 * @property {Boolean} isDoc
 * @property {String} value
 */
const Doc = Node.extends(function Doc(isDoc, value, location) {
  Node.apply(this, [KIND, location]);
  this.isDoc = isDoc;
  this.value = value;
});

module.exports = Doc;
