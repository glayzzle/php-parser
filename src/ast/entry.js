/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "entry";

/**
 * An array entry - see [Array](#array)
 * @constructor Entry
 * @extends {Node}
 * @property {Node|null} key The entry key/offset
 * @property {Node} value The entry value
 */
const Entry = Node.extends(function Entry(key, value, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.key = key;
  this.value = value;
});

module.exports = Entry;
