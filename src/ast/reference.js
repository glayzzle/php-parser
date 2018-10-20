/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "reference";

/**
 * Defines a reference node
 * @constructor Reference
 * @extends {Node}
 * @property {string} name
 * @property {string} resolution
 */
const Reference = Node.extends(KIND, function Reference(
  name,
  isRelative,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  if (isRelative) {
    this.resolution = Reference.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = Reference.UNQUALIFIED_NAME;
  } else if (name[0] === "") {
    this.resolution = Reference.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = Reference.QUALIFIED_NAME;
  }
  this.name = name.join("\\");
});

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} UNQUALIFIED_NAME
 */
Reference.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} QUALIFIED_NAME
 */
Reference.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} FULL_QUALIFIED_NAME
 */
Reference.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} RELATIVE_NAME
 */
Reference.RELATIVE_NAME = "rn";

module.exports = Reference;
