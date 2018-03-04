/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Comment = require("./comment");
const KIND = "commentblock";

/**
 * A comment block (multiline)
 * @constructor CommentBlock
 * @extends {Comment}
 */
const CommentBlock = Comment.extends(function CommentBlock(
  value,
  docs,
  location
) {
  Comment.apply(this, [KIND, value, docs, location]);
});

module.exports = CommentBlock;
