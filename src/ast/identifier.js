/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Node = require("./node");
const KIND = "identifier";

/**
 * Defines an identifier node
 * @constructor Identifier
 * @extends {Node}
 * @property {string} name
 * @property {string} resolution
 */
const Identifier = Node.extends(function Identifier(
  name,
  isRelative,
  docs,
  location
) {
  Node.apply(this, [KIND, docs, location]);
  if (isRelative) {
    this.resolution = Identifier.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = Identifier.UNQUALIFIED_NAME;
  } else if (name[0] === "") {
    this.resolution = Identifier.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = Identifier.QUALIFIED_NAME;
  }
  this.name = name.join("\\");
});

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} UNQUALIFIED_NAME
 */
Identifier.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} QUALIFIED_NAME
 */
Identifier.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} FULL_QUALIFIED_NAME
 */
Identifier.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} RELATIVE_NAME
 */
Identifier.RELATIVE_NAME = "rn";

module.exports = Identifier;
