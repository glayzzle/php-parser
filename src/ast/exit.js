/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Statement = require("./statement");
const KIND = "exit";

/**
 * Defines an exit / die call
 * @constructor Exit
 * @extends {Statement}
 * @property {Node|null} status
 */
const Exit = Statement.extends(function Exit(status, location) {
  Statement.apply(this, [KIND, location]);
  this.status = status;
});

module.exports = Exit;
