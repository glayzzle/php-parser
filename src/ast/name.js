/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Reference = require("./reference");
const KIND = "name";

/**
 * Defines a class reference node
 * @constructor Name
 * @extends {Reference}
 * @property {string} name
 * @property {string} resolution
 */
const Name = Reference.extends(KIND, function Name(
  name,
  isRelative,
  docs,
  location
) {
  Reference.apply(this, [KIND, docs, location]);
  if (isRelative) {
    this.resolution = Name.RELATIVE_NAME;
  } else if (name.length === 1) {
    this.resolution = Name.UNQUALIFIED_NAME;
  } else if (!name[0]) {
    this.resolution = Name.FULL_QUALIFIED_NAME;
  } else {
    this.resolution = Name.QUALIFIED_NAME;
  }
  this.name = name.join("\\");
});

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} UNQUALIFIED_NAME
 */
Name.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} QUALIFIED_NAME
 */
Name.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} FULL_QUALIFIED_NAME
 */
Name.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} RELATIVE_NAME
 */
Name.RELATIVE_NAME = "rn";

module.exports = Name;
