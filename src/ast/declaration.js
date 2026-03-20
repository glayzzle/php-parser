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

const VISIBILITY_MAP = [IS_PUBLIC, IS_PROTECTED, IS_PRIVATE];

/**
 * A declaration statement (function, class, interface...)
 * @constructor Declaration
 * @memberOf module:php-parser
 * @extends {Statement}
 * @property {Identifier|string} name
 * @property {string|null} visibilitySet
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
    const [getVis, setVis] = flags[0];
    if (getVis === -1) {
      this.visibility = IS_UNDEFINED;
    } else if (getVis === null) {
      /* istanbul ignore next */
      this.visibility = null;
    } else {
      this.visibility = VISIBILITY_MAP[getVis];
    }
    this.isStatic = flags[1] === 1;
    this.visibilitySet = setVis !== -1 ? VISIBILITY_MAP[setVis] : null;
  }
};

module.exports = Declaration;
