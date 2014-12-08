/**
 * Glayzzle : the PHP engine on NodeJS
 *
 * Copyright (C) 2014 Glayzzle
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @url http://glayzzle.com
 * @license GNU-2
 */

var engine = {
  // parsing helper
  parse: function(buffer) {
    this.lexer.mode_eval = true;
    this.lexer.all_tokens = false;
    return this.parser.parse(buffer);
  }
  ,parser: null
  // lexer instance
  ,lexer: require('./src/lexer')
  // tokens dictionnary
  ,tokens: require('./src/tokens')
};
// parser instance
engine.parser = require('./src/parser')(engine);
module.exports = engine;
