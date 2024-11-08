/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Statement = require("./statement");
const KIND = "declaration";

const IS_UNDEFINED = "";
const IS_PUBLIC = "public";
const IS_PROTECTED = "protected";
const IS_PRIVATE = "private";

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
 * @param {Array<number|null>} flags
 * @return {void}
 */
Declaration.prototype.parseFlags = function (flags) {
  this.isAbstract = flags[2] === 1;
  this.isFinal = flags[2] === 2;
  this.isReadonly = flags[3] === 1;
  if (this.kind !== "class") {
    if (flags[0] === -1) {
      this.visibility = IS_UNDEFINED;
    } else if (flags[0] === null) {
      /* istanbul ignore next */
      this.visibility = null;
    } else if (flags[0] === 0) {
      this.visibility = IS_PUBLIC;
    } else if (flags[0] === 1) {
      this.visibility = IS_PROTECTED;
    } else if (flags[0] === 2) {
      this.visibility = IS_PRIVATE;
    }
    this.isStatic = flags[1] === 1;
  }
};

module.exports = Declaration;
