/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "post";

/**
 * Defines a post operation `$i++` or `$i--`
 * @constructor Post
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
const Post = Operation.extends(function Post(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Post;
