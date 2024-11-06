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
 * @memberOf module:php-parser
 * @extends {Comment}
 */
module.exports = Comment.extends(
  KIND,
  function CommentLine(value, docs, location) {
    Comment.apply(this, [KIND, value, docs, location]);
  },
);
