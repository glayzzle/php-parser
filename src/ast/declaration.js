/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "declaration";

/**
 * A declaration statement (function, class, interface...)
 * @constructor Declaration
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Identifier|string} name
 */
const Declaration = Statement.extends(
  KIND,
  function Declaration(kind, name, docs, location) {
    Statement.apply(this, [kind || KIND, docs, location]);
    this.name = name;
  },
);

/**
 * Generic flags parser
 * @function
 * @name Declaration#parseFlags
 * @memberOf module:php-parser
 * @param {MemberFlags} flags
 * @return {void}
 */
Declaration.prototype.parseFlags = function (flags) {
  this.isAbstract = flags.isAbstract;
  this.isFinal = flags.isFinal;
  this.isReadonly = flags.isReadonly;
  if (this.kind !== "class") {
    this.visibility = flags.compute_visibility;
    this.isStatic = flags.isStatic;
  }
};

module.exports = Declaration;
