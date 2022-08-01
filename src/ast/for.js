/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "for";

/**
 * Defines a for iterator
 * @constructor For
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Expression[]} init
 * @property {Expression[]} test
 * @property {Expression[]} increment
 * @property {Block | null} body
 * @property {boolean} shortForm
 * @see http://php.net/manual/en/control-structures.for.php
 */
module.exports = Statement.extends(
  KIND,
  function For(init, test, increment, body, shortForm, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.init = init;
    this.test = test;
    this.increment = increment;
    this.shortForm = shortForm;
    this.body = body;
  }
);
