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
 * @memberOf module:php-parser
 * @extends {Reference}
 * @property {string} name
 * @property {string} resolution
 */
const Name = Reference.extends(
  KIND,
  function Name(name, isRelative, docs, location) {
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
  }
);

/**
 * This is an identifier without a namespace separator, such as Foo
 * @constant {String} Name#UNQUALIFIED_NAME
 * @memberOf module:php-parser
 */
Name.UNQUALIFIED_NAME = "uqn";
/**
 * This is an identifier with a namespace separator, such as Foo\Bar
 * @constant {String} Name#QUALIFIED_NAME
 * @memberOf module:php-parser
 */
Name.QUALIFIED_NAME = "qn";
/**
 * This is an identifier with a namespace separator that begins with
 * a namespace separator, such as \Foo\Bar. The namespace \Foo is also
 * a fully qualified name.
 * @constant {String} Name#FULL_QUALIFIED_NAME
 * @memberOf module:php-parser
 */
Name.FULL_QUALIFIED_NAME = "fqn";
/**
 * This is an identifier starting with namespace, such as namespace\Foo\Bar.
 * @constant {String} Name#RELATIVE_NAME
 * @memberOf module:php-parser
 */
Name.RELATIVE_NAME = "rn";

module.exports = Name;
