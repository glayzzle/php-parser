/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "noop";

/**
 * Ignore this node, it implies a no operation block, for example :
 * [$foo, $bar, /* here a noop node * /]
 * @constructor Noop
 * @memberOf module:php-parser
 * @extends {Node}
 */
module.exports = Node.extends(KIND, function Noop(docs, location) {
  Node.apply(this, [KIND, docs, location]);
});
