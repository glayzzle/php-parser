<h1 align="center">php-parser</h1>
<p align="center">
<a title="npm version" href="https://www.npmjs.com/package/php-parser"><img src="https://badge.fury.io/js/php-parser.svg"></a>
<a title="npm downloads" href="https://www.npmjs.com/package/php-parser"><img src="https://img.shields.io/npm/dm/php-parser.svg?style=flat"></a>
<a title="Gitter" href="https://gitter.im/glayzzle/Lobby"><img src="https://img.shields.io/badge/GITTER-join%20chat-green.svg"></a>
</p>
<p align="center">This JavaScript library parses PHP code and converts it to an AST.</p>

## Installation

This library is distributed with [npm](https://www.npmjs.com/package/php-parser) :

```sh
npm install php-parser --save
```

## Usage

```js
// initialize the php parser factory class
const fs = require("fs");
const path = require("path");
const engine = require("php-parser");

// initialize a new parser instance
const parser = new engine({
  // some options :
  parser: {
    extractDoc: true,
    php7: true,
  },
  ast: {
    withPositions: true,
  },
});

// Retrieve the AST from the specified source
const eval = parser.parseEval('echo "Hello World";');

// Retrieve an array of tokens (same as php function token_get_all)
const tokens = parser.tokenGetAll('<?php echo "Hello World";');

// Load a static file (Note: this file should exist on your computer)
const phpFile = fs.readFileSync("./example.php");

// Log out results
console.log("Eval parse:", eval);
console.log("Tokens parse:", tokens);
console.log("File parse:", parser.parseCode(phpFile));
```

## Sample AST output

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

## API Overview

The main API exposes a class with the following methods :

- **parseEval**(String|Buffer) : parse a PHP code in eval style mode (without php open tags)
- **parseCode**(String|Buffer, String filename) : parse a PHP code by using php open tags.
- **tokenGetAll**(String|Buffer) : retrieves a list of all tokens from the specified input.

You can also [pass options](https://github.com/glayzzle/php-parser/wiki/Options) that change the behavior of the parser/lexer.

## Documentation

- [AST nodes definition](https://php-parser.glayzzle.com/api/ast.js)
- [Sandbox](https://php-parser.glayzzle.com/demo)
- [List of options](https://php-parser.glayzzle.com/guides/options)

## Related projects

- [prettier/plugin-php](https://github.com/prettier/plugin-php) : Prettier PHP Plugin
- [babel-preset-php](https://gitlab.com/kornelski/babel-preset-php) : Babel preset for converting PHP syntax to JavaScript. It can run subset of PHP in the browser or in Node.js
- [wp-pot](https://github.com/rasmusbe/wp-pot) : Generate pot file for WordPress plugins and themes
- [crane](https://github.com/HvyIndustries/crane) : PHP Intellisense/code-completion for VS Code
- [php-unparser](https://github.com/chris-l/php-unparser) : Produce code that uses the style format recommended by PSR-1 and PSR-2.
- [php-writer](https://github.com/glayzzle/php-writer) : Update PHP scripts from their AST
- [ts-php-inspections](https://github.com/DaGhostman/ts-php-inspections) : Provide PHP code inspections written in typescript
- [php-reflection](https://github.com/glayzzle/php-reflection) : Reflection API for PHP files
- [vscode-phpunit](https://github.com/recca0120/vscode-phpunit) : vscode phpunit extension
- [lua2php](https://www.npmjs.com/package/lua2php) : a Lua to PHP transpiler

> You can add here your own project by opening an issue request.

## License

This library is released under BSD-3 license clause.
