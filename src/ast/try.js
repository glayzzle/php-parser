/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "try";

/**
 * Defines a try statement
 * @constructor Try
 * @extends {Statement}
 * @property {Block} body
 * @property {Catch[]} catches
 * @property {Block} allways
 */
const Try = Statement.extends(function Try(
  body,
  catches,
  always,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.catches = catches;
  this.always = always;
});

module.exports = Try;
