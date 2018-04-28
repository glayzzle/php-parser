/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Comment = require("./comment");
const KIND = "commentline";

/**
 * A single line comment
 * @constructor CommentLine
 * @extends {Comment}
 */
const CommentLine = Comment.extends(function CommentLine(
  value,
  docs,
  location
) {
  Comment.apply(this, [KIND, value, docs, location]);
});

module.exports = CommentLine;
