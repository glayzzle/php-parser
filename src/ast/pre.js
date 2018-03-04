/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "pre";

/**
 * Defines a pre operation `++$i` or `--$i`
 * @constructor Pre
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
const Pre = Operation.extends(function Pre(type, what, docs, location) {
  Operation.apply(this, [KIND, docs, location]);
  this.type = type;
  this.what = what;
});

module.exports = Pre;
