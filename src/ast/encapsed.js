/**
 * Copyright (C) 2018 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
"use strict";

const Literal = require("./literal");
const KIND = "encapsed";

/**
 * Defines an encapsed string (contains expressions)
 * @constructor Encapsed
 * @memberOf module:php-parser
 * @extends {Literal}
 * @property {String} type - Defines the type of encapsed string (shell, heredoc, string)
 * @property {String|Null} label - The heredoc label, defined only when the type is heredoc
 * @property {EncapsedPart[]} value
 */
const Encapsed = Literal.extends(
  KIND,
  function Encapsed(value, raw, type, docs, location) {
    Literal.apply(this, [KIND, value, raw, docs, location]);
    this.type = type;
  }
);

/**
 * The node is a double quote string :
 * ```php
 * <?php
 * echo "hello $world";
 * ```
 * @constant {String} Encapsed#TYPE_STRING - `string`
 * @memberOf module:php-parser
 */
Encapsed.TYPE_STRING = "string";

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo `ls -larth $path`;
 * ```
 * @constant {String} Encapsed#TYPE_SHELL - `shell`
 * @memberOf module:php-parser
 */
Encapsed.TYPE_SHELL = "shell";

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo <<<STR
 *  Hello $world
 * STR
 * ;
 * ```
 * @constant {String} Encapsed#TYPE_HEREDOC - `heredoc`
 * @memberOf module:php-parser
 */
Encapsed.TYPE_HEREDOC = "heredoc";

/**
 * The node contains a list of constref / variables / expr :
 * ```php
 * <?php
 * echo $foo->bar_$baz;
 * ```
 * @constant {String} Encapsed#TYPE_OFFSET - `offset`
 * @memberOf module:php-parser
 */
Encapsed.TYPE_OFFSET = "offset";

module.exports = Encapsed;
