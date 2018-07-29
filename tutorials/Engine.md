Initialise a new parser instance with the specified options

Usage :

```js
var parser = require('php-parser');
var instance = new parser({
  parser: {
    extractDoc: true,
    suppressErrors: true,
    php7: true
  },
  ast: {
    withPositions: true
  },
  lexer: {
    short_tags: true,
    asp_tags: true
  }
});

var evalAST = instance.parseEval('some php code');
var codeAST = instance.parseCode('<?php some php code', 'foo.php');
var tokens = instance.tokenGetAll('<?php some php code');
```

Type: Engine

**Parameters**

-   `options` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** List of options

**Properties**

-   `lexer` **Lexer**
-   `parser` **Parser**
-   `ast` **AST**
-   `tokens` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**

### parseEval

Parse an evaluating mode string (no need to open php tags)

**Parameters**

-   `buffer` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **Program**

### parseCode

Function that parse a php code with open/close tags

Sample code :

```php
<?php $x = 1;
```

Usage :

```js
var parser = require('php-parser');
var phpParser = new parser({
  // some options
});
var ast = phpParser.parseCode('...php code...', 'foo.php');
```

**Parameters**

-   `buffer` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The code to be parsed
-   `filename` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Filename

Returns **Program**

### tokenGetAll

Extract tokens from the specified buffer.

> Note that the output tokens are _STRICLY_ similar to PHP function `token_get_all`

**Parameters**

-   `buffer` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** Each item can be a string or an array with following informations [token_name, text, line_number]

## getStringBuffer

Check if the inpyt is a buffer or a string

**Parameters**

-   `buffer` **([Buffer](https://nodejs.org/api/buffer.html) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Input value that can be either a buffer or a string

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Returns the string from input
