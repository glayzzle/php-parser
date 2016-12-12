php-parser
==========

Parse PHP code from NodeJS and convert it to AST. This library is a standalone module of a larger project named [Glayzzle](http://glayzzle.com).

[![npm version](https://badge.fury.io/js/php-parser.svg)](https://www.npmjs.com/package/php-parser)
[![Build Status](https://travis-ci.org/glayzzle/php-parser.svg)](https://travis-ci.org/glayzzle/php-parser)
[![Coverage Status](https://img.shields.io/coveralls/glayzzle/php-parser.svg)](https://coveralls.io/r/glayzzle/php-parser)
[![Gitter](https://img.shields.io/badge/GITTER-join%20chat-green.svg)](https://gitter.im/glayzzle/Lobby)


# Install it

```sh
$ npm install php-parser --save
```

# Try it

```sh
$ cd bin
$ node test.js -e "echo 'Hello World';"
```

Will output :
```js
*** START TESTING ***

-- TOKENS :
T_ECHO T_CONSTANT_ENCAPSED_STRING ;

-- AST :

[
  'program',  <-- program node
  [
    [ 'sys',  <-- first child, typed system call
      'echo', <-- operation echo
      [
        [ 'string', '"Hello World"' ]  <-- first argument
      ]
    ]
  ]
]
```

Try it online (demo) :
https://tonicdev.com/ichiriac/php-parser

# Use it

```js
// initialize a new parser instance
var parser = require('php-parser').create();

// how to retrieve the AST
var AST = parser.parseEval('echo "Hello World";');

// how to list tokens
var tokens = parser.tokenGetAll('<?php echo "Hello World";');
```

For more details please [visit he wiki](https://github.com/glayzzle/php-parser/wiki).

# Join the dev

If you want to change/fix the lexer you will find code to `./src/lexer/`.
You can also implement the parser, the code is into `./src/parser/`.
To check your changes add tests into `./test/parser/`, and run `npm run test`.
Try to keep or improve the coverage levels.

The command line options :

```sh
Usage: test [options] [-f] <file>

  -f <file>                      Parse and test the specified file
  -d <path>                      Parse each file in the specified path
  -r                             Use recursivity with the specified path
  -e                             Eval the specified input and shows AST
  -v                             Enable verbose mode and show debug
  -h, --help                     Print help and exit
```

If you run into problems with a test, run it with the cli and add the `--debug` flag.

# Misc

This library is released under BSD-3 license clause.
