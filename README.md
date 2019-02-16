<h1 align="center">php-parser</h1>
<p align="center">
<a href="https://travis-ci.org/glayzzle/php-parser"><img src="https://api.travis-ci.org/glayzzle/php-parser.svg?branch=2.2.0"></a>
<a href="https://coveralls.io/github/glayzzle/php-parser?branch=master"><img src="https://coveralls.io/repos/github/glayzzle/php-parser/badge.svg?branch=master&v=20170115" alt="Coverage Status" /></a>
<a title="npm version" href="https://www.npmjs.com/package/php-parser"><img src="https://badge.fury.io/js/php-parser.svg"></a>
<a title="npm downloads" href="https://www.npmjs.com/package/php-parser"><img src="https://img.shields.io/npm/dm/php-parser.svg?style=flat"></a>
<a title="Gitter" href="https://gitter.im/glayzzle/Lobby"><img src="https://img.shields.io/badge/GITTER-join%20chat-green.svg"></a>
<a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fglayzzle%2Fphp-parser?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fglayzzle%2Fphp-parser.svg?type=shield"/></a>
</p>
<p align="center">This javascript library parses PHP code and convert it to AST.</p>

Installation
------------

This library is distributed with [npm](https://www.npmjs.com/package/php-parser) :

```sh
npm install php-parser --save
```

Usage
-----

```js
// initialize the php parser factory class
var fs = require('fs');
var path = require('path');
var engine = require('php-parser');

// initialize a new parser instance
var parser = new engine({
  // some options :
  parser: {
    extractDoc: true,
    php7: true
  },
  ast: {
    withPositions: true
  }
});

// Retrieve the AST from the specified source
var eval = parser.parseEval('echo "Hello World";');

// Retrieve an array of tokens (same as php function token_get_all)
var tokens = parser.tokenGetAll('<?php echo "Hello World";');

// Load a static file (Note: this file should exist on your computer)
var phpFile = fs.readFileSync( './example.php' );

// Log out results
console.log( 'Eval parse:', eval );
console.log( 'Tokens parse:', tokens );
console.log( 'File parse:', parser.parseCode(phpFile) );

```

Sample AST output
-----------------

```js
{
  'kind': 'program',
  'children': [
    {
      'kind': 'echo',
      'arguments': [
        {
          'kind': 'string',
          'isDoubleQuote': true,
          'value': 'Hello World'
        }
      ]
    }
  ]
}
```

- Try it online (demo) : http://glayzzle.com/php-parser/
- Or from AST Explorer : https://astexplorer.net/


API Overview
------------

The main API exposes a class with the following methods :

- **parseEval**(String|Buffer) : parse a PHP code in eval style mode (without php open tags)
- **parseCode**(String|Buffer, String filename) : parse a PHP code by using php open tags.
- **tokenGetAll**(String|Buffer) : retrieves a list of all tokens from the specified input.

You can also [pass options](https://github.com/glayzzle/php-parser/wiki/Options) that change the behavior of the parser/lexer.

Documentation
-------------

- [AST nodes definition](https://glayzzle.com/docs/)
- [Sandbox](https://glayzzle.com/)
- [List of options](https://github.com/glayzzle/php-parser/wiki/Options)

Related projects
----------------

- [prettier/plugin-php](https://github.com/prettier/plugin-php) : Prettier PHP Plugin
- [babel-preset-php](https://gitlab.com/kornelski/babel-preset-php) : Babel preset for converting PHP syntax to JavaScript. It can run subset of PHP in the browser or in Node.js
- [wp-pot](https://github.com/rasmusbe/wp-pot) : Generate pot file for WordPress plugins and themes
- [crane](https://github.com/HvyIndustries/crane) : PHP Intellisense/code-completion for VS Code
- [php-unparser](https://github.com/chris-l/php-unparser) : Produce code that uses the style format recommended by PSR-1 and PSR-2.
- [php-writer](https://github.com/glayzzle/php-writer) : Update PHP scripts from their AST
- [ts-php-inspections](https://github.com/DaGhostman/ts-php-inspections) : Provide PHP code inspections written in typescript
- [php-reflection](https://github.com/glayzzle/php-reflection) : Reflection API for PHP files
- [vscode-phpunit](https://github.com/recca0120/vscode-phpunit) : vscode phpunit extension

> You can add here your own project by opening an issue request.

## License

This library is released under BSD-3 license clause.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fglayzzle%2Fphp-parser.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fglayzzle%2Fphp-parser?ref=badge_large)
