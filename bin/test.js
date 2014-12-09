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

var util    = require('util');
var fs      = require('fs');
var path    = require('path');
var engine  = require('../main');

// help screen
function printHelp() {
  util.puts('Usage: test [options] [-f] <file>');
  util.puts('');
  util.puts('  -f <file>                      Parse and test the specified file');
  util.puts('  -d <path>                      Parse each file in the specified path');
  util.puts('  -r                             Use recursivity with the specified path');
  util.puts('  -h, --help                     Print help and exit');
}


// aborts the execution with the specified error message
function abort(message) {
  util.error(message);
  process.exit(1);
}

/* Arguments */
var options = {
  debug: 0,
  filename: null,
  path: null,
  recursive: false
};

var args = process.argv.slice(2); // Trim 'node' and the script path.


function isOption(arg) {
  return (/^-/).test(arg);
}

function nextArg() {
  args.shift();
}

// Reading arguments
while (args.length > 0 && isOption(args[0])) {
  switch(args[0]) {
    case '-f':
      nextArg();
      options.filename = args[0];
      break;

    case '--debug':
      nextArg();
      options.debug = args[0];
      break;

    case '-d':
      nextArg();
      options.path = args[0];
      break;

    case '-r':
      options.recusive = true;
      break;

    case '-h':
    case '--help':
      printHelp();
      process.exit(0);
      break;

    default:
      abort('Unknown option: ' + args[0] + '.');
  }
  nextArg();
}

// Checking last parameters
if ( args.length > 0 ) {
  if ( args.length == 1 && !options.filename ) {
    options.filename = args[0];
  } else {
    abort('Too many arguments.');
  }
}
if ( !options.filename && !options.path ) {
  abort('Expecting a filename or a path.');
}

process.env.DEBUG = options.debug;

// Load tests handlers
var engines = [
    require('./formats/parser')
  , require('./formats/phpt')
  , require('./formats/token')
  , require('./formats/php')
  , require('./formats/ast')
];

// gets the extension of the specified filename
function getExtension(filename) {
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i);
}

// run a test over the specified file
function test(filename) {
  console.log(' + ' + filename);
  try {
    if (options.ast) {
      return engines[4].run(
            filename
          , engine
      );
    }
    var extension = getExtension(filename),
        isWin = /^win/.test(process.platform);
    for(var i = 0; i<engines.length; i++) {
      if (engines[i].handles(filename, extension)) {
        if (engines[i].explode) {
          return engines[i].run(
            fs.readFileSync(filename).toString().split(
              isWin ? '\r\n' : '\n'
            )
            , filename
            , engine
          );
        } else {
          return engines[i].run(filename, engine);
        }
      }
    }
    console.info('\n(i) IGNORED : unrecognized extension "'+getExtension(filename)+'" for ' + filename);
    return false;
  } catch(e) {
    util.error( (e.stack || e) + '\n' );
    throw e;
    return false;
  }
}

// run tests
console.log('\n*** START TESTING ***\n');
if (options.filename) {
  if (!test(options.filename)) {
    abort('Error: test FAILED !!!');
  } else {
    console.log('Success');
  }
} else if (options.path) {
  var testFiles = function(path) {
    fs.readdir(path, function(err, files) {
      if (err) throw err;
      for(var i = 0; i < files.length; i ++) {
        var file = files[i];
        if (file[0] != '.') {
          var stat = fs.statSync(path + file);
          if (!stat.isDirectory()) {
            test(path + file);
          } else if (options.recusive) {
            testFiles(path + file + '/');
          }
        }
      }
    });
  };
  testFiles(options.path);
}
