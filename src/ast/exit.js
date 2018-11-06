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
 * @extends {Expression}
 * @property {Node|null} status
 * @property {Boolean} useDie
 */
module.exports = Expression.extends(KIND, function Exit(
  status,
  useDie,
  docs,
  location
) {
  Expression.apply(this, [KIND, docs, location]);
  this.status = status;
  this.useDie = useDie;
});
