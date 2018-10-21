/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "reference";

/**
 * Defines a reference node
 * @constructor Reference
 * @extends {Node}
 */
const Reference = Node.extends(KIND, function Reference(kind, docs, location) {
  Node.apply(this, [kind || KIND, docs, location]);
});

module.exports = Reference;
