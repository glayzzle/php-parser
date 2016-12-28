/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
var Node = require('./node');
var KIND = 'continue';

/**
 * A continue statement
 * @constructor Continue
 * @extends {Node}
 */
var Continue = Node.extends(function Continue(location) {
  Node.apply(this, [KIND, location]);
});

module.exports = Continue;
