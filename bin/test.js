#!/usr/bin/env node

/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
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
  util.puts('  -e                             Eval the specified input and shows AST');
  util.puts('  -v                             Enable verbose mode and show debug');
  util.puts('  -h, --help                     Print help and exit');
}


// aborts the execution with the specified error message
function abort(message) {
  util.error(message);
  process.exit(1);
}

/* Arguments */
var options = {
  filename: null,
  path: null,
  recursive: false,
  evalCode: false
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

    case '-e':
      nextArg();
      options.evalCode = args[0];
      break;

    case '--debug':
    case '-v':
      engine.parser.debug = true;
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
if ( !options.filename && !options.path && !options.evalCode ) {
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
if (options.evalCode) {
  var EOF = engine.lexer.EOF;
  engine.lexer.mode_eval = true;
  engine.lexer.all_tokens = false;
  engine.lexer.setInput(options.evalCode);
  var token = engine.lexer.lex() || EOF;
  var names = engine.tokens.values;
  var tokens = [];
  while(token != EOF) {
    if (names[token]) {
      tokens.push(names[token]);
    } else {
      tokens.push(token);
    }
    token = engine.lexer.lex() || EOF;
  }  
  console.log('-- TOKENS : ');
  console.log(tokens.join(' '));
  
  var ast = engine.parser.parse(options.evalCode);
  console.log('-- AST : ');
  console.log(
    util.inspect(
      ast, { 
        showHidden: false, 
        depth: 20, 
        colors: true 
      }
    )
  );

} else if (options.filename) {
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
