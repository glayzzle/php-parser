/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Literal = require("./literal");
const KIND = "encapsed";

/**
 * Defines an encapsed string (contains expressions)
 * @constructor Encapsed
 * @extends {Literal}
 * @property {String} type - Defines the type of encapsed string (shell, heredoc, string)
 * @property {String|Null} label - The heredoc label, defined only when the type is heredoc
 */
const Encapsed = Literal.extends(function Encapsed(
  value,
  raw,
  type,
  docs,
  location
) {
  Literal.apply(this, [KIND, value, raw, docs, location]);
  this.type = type;
});

/**
 * The node is a double quote string :
 * ```php
 * <?php
 * echo "hello $world";
 * ```
 * @constant {String} TYPE_STRING - `string`
 */
Encapsed.TYPE_STRING = "string";

/**
 * The node is a shell execute string :
 * ```php
 * <?php
 * echo `ls -larth $path`;
 * ```
 * @constant {String} TYPE_SHELL - `shell`
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
 * @constant {String} TYPE_HEREDOC - `heredoc`
 */
Encapsed.TYPE_HEREDOC = "heredoc";

/**
 * The node contains a list of constref / variables / expr :
 * ```php
 * <?php
 * echo $foo->bar_$baz;
 * ```
 * @constant {String} TYPE_OFFSET - `offset`
 */
Encapsed.TYPE_OFFSET = "offset";

module.exports = Encapsed;
