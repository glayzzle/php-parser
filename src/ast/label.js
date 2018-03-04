/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";
const Node = require("./node");
const KIND = "label";

/**
 * A label statement (referenced by goto)
 * @constructor Label
 * @extends {Node}
 * @property {String} name
 */
const Label = Node.extends(function Label(name, docs, location) {
  Node.apply(this, [KIND, docs, location]);
  this.name = name;
});

module.exports = Label;
