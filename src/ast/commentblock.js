/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Comment = require("./comment");
const KIND = "commentblock";

/**
 * A comment or documentation
 * @constructor Documentation
 * @extends {Comment}
 * @property {Boolean} isDoc
 * @property {String} value
 */
const CommentBlock = Comment.extends(function CommentBlock(value, location) {
  Comment.apply(this, [KIND, value, location]);
});

module.exports = CommentBlock;
