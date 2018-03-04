/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");

/**
 * Abstract documentation node (ComentLine or CommentBlock)
 * @constructor Comment
 * @extends {Node}
 * @property {String} value
 */
const Comment = Node.extends(function Comment(kind, value, docs, location) {
  Node.apply(this, [kind, docs, location]);
  this.value = value;
});

module.exports = Comment;
