/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "catch";

/**
 * Defines a catch statement
 * @constructor Catch
 * @extends {Statement}
 * @property {Identifier[]} what
 * @property {Variable} variable
 * @property {Statement} body
 * @see http://php.net/manual/en/language.exceptions.php
 */
const Catch = Statement.extends(function Catch(
  body,
  what,
  variable,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.body = body;
  this.what = what;
  this.variable = variable;
});

module.exports = Catch;
