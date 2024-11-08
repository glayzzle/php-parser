/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");

/**
 * Abstract documentation node (ComentLine or CommentBlock)
 * @constructor Comment
 * @memberOf module:php-parser
 * @extends {Node}
 * @property {String} value
 */
module.exports = Node.extends(
  "comment",
  function Comment(kind, value, docs, location) {
    Node.apply(this, [kind, docs, location]);
    this.value = value;
  },
);
