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

# Use it

```js
// initialize a new parser instance
var parser = require('php-parser').create();

// how to retrieve the AST
var AST = parser.parseEval('echo "Hello World";');

// how to list tokens
var tokens = parser.tokenGetAll('<?php echo "Hello World";');
```

For more details please [visit he wiki](https://github.com/glayzzle/php-parser/docs).

# Output

```js
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
http://glayzzle.com/php-parser/#demo

# Contributing

If you want to contribute please visit this repository https://github.com/glayzzle/php-parser-dev.

# Misc

This library is released under BSD-3 license clause.
