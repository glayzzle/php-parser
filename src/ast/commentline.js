/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Comment = require("./comment");
const KIND = "commentline";

/**
 * A comment or documentation
 * @constructor Documentation
 * @extends {Comment}
 * @property {}
 * @property {String} value
 */
const CommentLine = Comment.extends(function CommentLine(value, location) {
  Comment.apply(this, [KIND, value, location]);
});

module.exports = CommentLine;
