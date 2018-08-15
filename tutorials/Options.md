# Options

When you call the parser you can pass options as following :

```js
var reader = require('php-parser');
reader.parseCode('<?php echo true;', {
  parser: {
    debug: false, 
    locations: false,
    extractDoc: false,
    suppressErrors: false
  },
  ast: {
    withPositions: true,
    withSource: true
  },
  lexer: {
    all_tokens: false,
    comment_tokens: false,
    mode_eval: false,
    asp_tags: false,
    short_tags: false
  }
});
```

## Parser 

* debug : enables debug output, useful for handling parsing errors when extending the library.
* locations : attach location nodes to AST - [see more details](https://github.com/glayzzle/php-parser/wiki/Nodes-positions)
* extractDoc : extracting comments blocks - [see more details](https://github.com/glayzzle/php-parser/wiki/Annotations)
* suppressErrors: graceful parsing mode, when an error is raised it's ignored [see more details](https://github.com/glayzzle/php-parser/wiki/Graceful-mode)

## Lexer

* all_tokens : extract all tokens (same output as `token_get_all` function in PHP)
* comment_tokens: extract also comments tokens (used when all_tokens is false)
* mode_eval: ignoring open or close tags, the input is directly a PHP script
* asp_tags: handles ASP like tags `<%` and `%>`
* short_tags : handle short opening tag `<?`
