/*!
 * Copyright (C) 2017 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */

var Literal = require('./literal');
var KIND = 'shell';

/**
 * Defines inline html output (treated as echo output)
 * @constructor Shell
 * @extends {Literal}
 * @see http://php.net/manual/fr/language.operators.execution.php
 */
var Shell = Literal.extends(function Shell(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Shell;
