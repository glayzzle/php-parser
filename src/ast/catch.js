/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "catch";

/**
 * Defines a catch statement
 * @constructor Catch
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Name[]} what
 * @property {Variable} variable
 * @property {Block} body
 * @see http://php.net/manual/en/language.exceptions.php
 */
module.exports = Statement.extends(
  KIND,
  function Catch(body, what, variable, docs, location) {
    Statement.apply(this, [KIND, docs, location]);
    this.body = body;
    this.what = what;
    this.variable = variable;
  },
);
