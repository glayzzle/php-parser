/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");

/**
 * Abstract documentation node (ComentLine or CommentBlock)
 * @constructor Documentation
 * @extends {Node}
 * @property {String} value
 */
const Comment = Node.extends(function Comment(kind, value, location) {
  Node.apply(this, [kind, location]);
  this.value = value;
});

module.exports = Comment;
