/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Expression = require("./expression");
const KIND = "exit";

/**
 * Defines an exit / die call
 * @constructor Exit
 * @memberOf module:php-parser
 * @extends {Expression}
 * @property {Node|null} expression
 * @property {boolean} useDie
 */
module.exports = Expression.extends(
  KIND,
  function Exit(expression, useDie, docs, location) {
    Expression.apply(this, [KIND, docs, location]);
    this.expression = expression;
    this.useDie = useDie;
  }
);
