/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "classreference";

/**
 * Defines a class reference node
 * @constructor ClassReference
 * @extends {Reference}
 * @property {string} name
 * @property {string} resolution
 */
const ClassReference = Reference.extends(KIND, function ClassReference(
  name,
  isRelative,
  docs,
  location
) {
  Reference.apply(this, [KIND, docs, location]);
  if (isRelative) {
    this.resolution = ClassReference.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = ClassReference.UNQUALIFIED_NAME;
  } else if (!name[0]) {
    this.resolution = ClassReference.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = ClassReference.QUALIFIED_NAME;
  }
  this.name = name.join("\\");
});

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} UNQUALIFIED_NAME
 */
ClassReference.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} QUALIFIED_NAME
 */
ClassReference.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} FULL_QUALIFIED_NAME
 */
ClassReference.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} RELATIVE_NAME
 */
ClassReference.RELATIVE_NAME = "rn";

module.exports = ClassReference;
