php-parser
==========

Parse PHP code from NodeJS and convert it to AST. This library is a standalone module of a larger project named [Glayzzle](http://glayzzle.com).

[![Build Status](https://travis-ci.org/glayzzle/php-parser.svg)](https://travis-ci.org/glayzzle/php-parser)
[![Coverage Status](https://img.shields.io/coveralls/glayzzle/php-parser.svg)](https://coveralls.io/r/glayzzle/php-parser)

# Install it

```
$ npm install php-parser --save
```

# Try it

```
$ cd bin
$ node test.js -e "echo 'Hello World';"
```

# Use it

```
var parser = require('php-parser');
var AST = parser.parse('echo "Hello World";');
console.log(AST);
```

# Join the dev

If you want to change/fix the lexer you will find code to `./src/lexer/`. Do not change dirrectly `./src/lexer.js` or `./src/tokens.js`, they are generated with the command `npm run build`

You can also implement the parser, the code is into `./src/parser/`. To check your changes add tests into `./test/parser/`, and run `npm run test`. Try to keep or improve the coverage levels.

The command line options :

```
Usage: test [options] [-f] <file>

  -f <file>                      Parse and test the specified file
  -d <path>                      Parse each file in the specified path
  -r                             Use recursivity with the specified path
  -e                             Eval the specified input and shows AST
  -v                             Enable verbose mode and show debug
  -h, --help                     Print help and exit
```

If you run into problems with a test, run it with the cli and add the `--debug` flag.

#Misc

This library is released under BSD-3 license clause.
