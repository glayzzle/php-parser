/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "exit";

/**
 * Defines an exit / die call
 * @constructor Exit
 * @extends {Statement}
 * @property {Node|null} status
 * @property {Boolean} useDie
 */
module.exports = Statement.extends(KIND, function Exit(
  status,
  useDie,
  docs,
  location
) {
  Statement.apply(this, [KIND, docs, location]);
  this.status = status;
  this.useDie = useDie;
});
