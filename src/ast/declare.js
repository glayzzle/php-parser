/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

const Block = require("./block");
const KIND = "declare";

/**
 * The declare construct is used to set execution directives for a block of code
 * @constructor Declare
 * @extends {Block}
 * @property {Expression[]} what
 * @property {String} mode
 * @see http://php.net/manual/en/control-structures.declare.php
 */
const Declare = Block.extends(function Declare(
  what,
  body,
  mode,
  docs,
  location
) {
  Block.apply(this, [KIND, body, docs, location]);
  this.what = what;
  this.mode = mode;
});

/**
 * The node is declared as a short tag syntax :
 * ```php
 * <?php
 * declare(ticks=1):
 * // some statements
 * enddeclare;
 * ```
 * @constant {String} MODE_SHORT
 */
Declare.MODE_SHORT = "short";

/**
 * The node is declared bracket enclosed code :
 * ```php
 * <?php
 * declare(ticks=1) {
 * // some statements
 * }
 * ```
 * @constant {String} MODE_BLOCK
 */
Declare.MODE_BLOCK = "block";

/**
 * The node is declared as a simple statement. In order to make things simpler
 * children of the node are automatically collected until the next
 * declare statement.
 * ```php
 * <?php
 * declare(ticks=1);
 * // some statements
 * declare(ticks=2);
 * // some statements
 * ```
 * @constant {String} MODE_NONE
 */
Declare.MODE_NONE = "none";

module.exports = Declare;
