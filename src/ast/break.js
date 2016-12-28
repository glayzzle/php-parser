/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Node = require('./node');
var KIND = 'break';

/**
 * A break statement
 * @constructor Break
 * @extends {Node}
 */
var Break = Node.extends(function Break(location) {
  Node.apply(this, [KIND, location]);
});

module.exports = Break;
