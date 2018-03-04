/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Constant = require("./constant");
const KIND = "classconstant";

/**
 * Defines a class/interface/trait constant
 * @constructor ClassConstant
 * @extends {Constant}
 * @property {boolean} isStatic
 * @property {string} visibility
 */
const ClassConstant = Constant.extends(function ClassConstant(
  name,
  value,
  flags,
  docs,
  location
) {
  Constant.apply(this, [name, value, docs, location]);
  this.kind = KIND;
  this.parseFlags(flags);
});

module.exports = ClassConstant;
