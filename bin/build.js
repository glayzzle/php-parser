#!/usr/bin/env node

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


// requiring libs
var util            = require('util');
var jison           = require('jison');
var Lexer           = require('jison-lex');
var LexerParser     = require('lex-parser');
var fs              = require('fs');

// global var
var GLAYZZLE_PATH   = '../src/lexer/';

// helper for reading a list of files
var readParserFiles = function(files) {
  var buffer = '';
  for(var i = 0; i < files.length; i++) {
    util.puts('Reading ' + GLAYZZLE_PATH + files[i]);
    buffer += fs.readFileSync(GLAYZZLE_PATH + files[i], "utf8");
  }
  // reading imports
  var importRegex = /^@import\s+'([A-Za-z0-9\-_\.\\\/]*)'$/mg;
  var files = [];
  match = importRegex.exec(buffer);
  while (match != null) {
    files.push(match[1]);
    match = importRegex.exec(buffer);
  }
  var imports = {};
  if (files && files.length > 0) {
    for(var i = 0; i < files.length; i++) {
      util.puts('Imports ' + files[i]);
      imports[files[i]] = fs.readFileSync(
        GLAYZZLE_PATH  + files[i]
      );
    }
  } else {
    files = [];
  }
  return buffer.replace(
    importRegex,
    function(match, file) {
      return imports[file];
    }
  );
};

// start building
util.puts('** BUILDING MODE **\n');
lexer       = readParserFiles(['lexer.l']);

// reading tokens
var 
  tokens  = [],
  tokenNames = [], 
  tokenValues = [], 
  tokenVars = [],
  tokenName = null, 
  buffer = lexer.match(/%token\s([A-Z_0-9]+)/gi)
;
for(var i = 0; i < buffer.length; i++) {
  tokenName = buffer[i].substring(7);
  tokens.push(tokenName);
  tokenValues.push((i + 101) + ': \'' + tokenName + '\'');
  tokenNames.push(tokenName + ': ' + (i + 101));
  tokenVars.push(tokenName + ' = ' + (i + 101));
}

// writing tokens
util.puts('...Building tokens.js');
fs.writeFileSync(
  GLAYZZLE_PATH + '../tokens.js',
  fs.readFileSync(GLAYZZLE_PATH + 'license.txt', "utf8")
  +'\n// exports token index\n'
  +'module.exports = {\n'
  +'  values: {\n'
  +'    '+tokenValues.join(',\n    ')
  +'\n  },\n'
  +'  names: {\n'
  +'    '+tokenNames.join(',\n    ')
  +'\n  }\n'
  +'};'
);

// parse grammar
var lexerGrammar = LexerParser.parse(lexer);
if (!lexerGrammar.options) lexerGrammar.options = {};  
lexerGrammar.options.moduleName = 'lexer'; // used exported variable
lexerGrammar.options.moduleType = 'js';


// Generating the lexer
util.puts('...Building lexer.js');
fs.writeFileSync(
  GLAYZZLE_PATH + '../lexer.js',
  fs.readFileSync(GLAYZZLE_PATH + 'license.txt', "utf8")
  +'\nvar ' + tokenVars.join(',\n  ') + ';\n'
  + fs.readFileSync(GLAYZZLE_PATH + 'header.js') + '\n'
  + Lexer.generate(lexerGrammar) 
  + '\n\n' + fs.readFileSync(GLAYZZLE_PATH + 'footer.js') 
);

util.puts('');
util.puts('DONE - the lexer was rebuilt !');
util.puts('');
