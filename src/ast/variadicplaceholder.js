/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Node = require("./node");
const KIND = "variadicplaceholder";

/**
 * Defines a variadic placeholder (the ellipsis in PHP 8.1+'s first-class callable syntax)
 * @constructor VariadicPlaceholder
 * @memberOf module:php-parser
 * @extends {Node}
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
module.exports = Node.extends(
  KIND,
  function VariadicPlaceholder(docs, location) {
    Node.apply(this, [KIND, docs, location]);
  }
);
