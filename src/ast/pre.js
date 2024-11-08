/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Operation = require("./operation");
const KIND = "pre";

/**
 * Defines a pre operation `++$i` or `--$i`
 * @constructor Pre
 * @memberOf module:php-parser
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
module.exports = Operation.extends(
  KIND,
  function Pre(type, what, docs, location) {
    Operation.apply(this, [KIND, docs, location]);
    this.type = type;
    this.what = what;
  },
);
