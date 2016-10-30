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
engine.lexer.short_tags = true;

// help screen
function printHelp() {
  console.log('Usage: test [options] [-f] <file>');
  console.log('');
  console.log('  -f <file>                      Parse and test the specified file');
  console.log('  -d <path>                      Parse each file in the specified path');
  console.log('  -m <path>                      Run mocha tests on the specified path');
  console.log('  -r                             Use recursivity with the specified path');
  console.log('  -e                             Eval the specified input and shows AST');
  console.log('  -v                             Enable verbose mode and show debug');
  console.log('  -s                             Silent error mode, and try to suppress errors');
  console.log('  --asp_short                    Test with short tags');
  console.log('  -h, --help                     Print help and exit');
}


// aborts the execution with the specified error message
function abort(message) {
  console.error(message);
  process.exit(1);
}

/* Arguments */
var options = {
  filename: null,
  path: null,
  recursive: false,
  evalCode: false,
  aspShort: false,
  mocha: false
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

    case '--asp_short':
      engine.lexer.asp_tags = true;
      options.aspShort = true;
      break;

    case '--debug':
    case '-v':
      engine.parser.locations = true;
      engine.parser.debug = true;
      break;

    case '-s':
      engine.parser.suppressErrors = true;
      break;

    case '-d':
      nextArg();
      options.path = args[0];
      break;

    case '-m':
      nextArg();
      options.mocha = args[0];
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
if ( !options.filename && !options.path && !options.evalCode && !options.mocha ) {
  abort('Expecting a filename or a path.');
}

process.env.DEBUG = options.debug;

// Load tests handlers
var engines = [
    require('./formats/parser')
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
  if (engine.parser.debug) {
    console.log(' + ' + filename);
  }
  try {
    if (options.ast) {
      return engines[4].run(
            filename
          , engine
      );
    }
    var extension = getExtension(filename);
    var result = false, found = false;
    for(var i = 0; i < engines.length; i++) {
      if (engines[i].handles(filename, extension)) {
        found = true;
        if (engines[i].explode) {
          result = engines[i].run(
            fs.readFileSync(filename).toString().split(
              /[\r\n]/
            )
            , filename
            , engine
          );
        } else {
          result = engines[i].run(filename, engine);
        }
        if (!result) {
          if (engine.parser.debug) {
            abort('Test "' + filename + '" does not pass !');
            break;
          } else {
            throw new Error('Test "' + filename + '" does not pass !');
          }
        }
      }
    }
    if (!found) {
      if (engine.parser.debug) {
        console.info('\n(i) IGNORED : unrecognized extension "'+getExtension(filename)+'" for ' + filename);
      }
      return false;
    } else {
      return result;
    }
  } catch(e) {
    console.error( (e.stack || e) + '\n' );
    throw e;
    return false;
  }
}

if (options.mocha) {
  var Mocha = require('mocha'), path = require('path');
  
  // Instantiate a Mocha instance.
  var mocha = new Mocha();

  // Add each .js file to the mocha instance
  fs.readdirSync(options.mocha).filter(function(file){
      // Only keep the .js files
      return file.substr(-3) === '.js';
  }).forEach(function(file){
      mocha.addFile(
          path.join(options.mocha, file)
      );
  });
  
  // Run the tests.
  mocha.run(function(failures){
    if (failures) {
      process.on('exit', function () {
        process.exit(failures);  // exit with non-zero status if there were failures
      });
    }
  });
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

  var files = [];
  var scanFiles = function(path) {
    var items = fs.readdirSync(path);
    for(var i = 0; i < items.length; i ++) {
      var file = items[i];
      if (file[0] != '.') {
        var stat = fs.statSync(path + file);
        if (!stat.isDirectory()) {
          files.push(path + file);
        } else if (options.recusive) {
          scanFiles(path + file + '/');
        }
      }
    }
  };

  console.log('Scan files ' + options.path);
  scanFiles(options.path);
  console.log('Found ' + files.length + ' items');

  var stats = {
    time: process.hrtime(),
    progress: 0,
    code: 0
  };
  
  function secondsToTime(secs)
  {
      secs = Math.round(secs);
      var hours = Math.floor(secs / (60 * 60));
      if (hours < 10) hours = '0' + hours;
      var divisor_for_minutes = secs % (60 * 60);
      var minutes = Math.floor(divisor_for_minutes / 60);
      if (minutes < 10) minutes = '0' + minutes;
      var divisor_for_seconds = divisor_for_minutes % 60;
      var seconds = Math.ceil(divisor_for_seconds);
      if (seconds < 10) seconds = '0' + seconds;
      return hours + ':' + minutes + ':' + seconds;
  }
  // running
  for(var i = 0; i < files.length; i++) {
    var file = files[i];  
    if (i / files.length * 100 > stats.progress + 2) {
      stats.progress = i / files.length * 100;
      var now = process.hrtime(stats.time);
      var remain = (now[0] / stats.progress) * (100 - stats.progress);
      console.log(
        'Progress ', 
        Math.round(stats.progress) + '%', 
        ' remains ', 
        secondsToTime(remain)
      );
    }
    try {
      test(file);
    } catch(e) {
      stats.code = 1;
      console.error('Error on ' + file);
      console.error(e);
    }
  }

  var duration = process.hrtime(stats.time);
  console.log('\n--------------------------------------');
  console.log('Tests duration : ' + duration[0] +'sec');

  if (stats.code === 0) {
    console.log('I AM HAPPY !');
  }

  process.exit(stats.code);
}
