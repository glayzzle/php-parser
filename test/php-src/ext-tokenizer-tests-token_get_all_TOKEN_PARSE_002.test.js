// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_TOKEN_PARSE_002.phpt
  it("Semi reserved words support: class const", function () {
    expect(parser.parseCode("<?php\n$tokens = token_get_all('<?php\n  class SomeClass {\n      const CONST = 1;\n      const CONTINUE = (self::CONST + 1);\n      const ARRAY = [1, self::CONTINUE => [3, 4], 5];\n  }\n', TOKEN_PARSE);\narray_walk($tokens, function($tk) {\n  if(is_array($tk)) {\n    if(($t = token_name($tk[0])) == 'T_WHITESPACE') return;\n    echo \"L{$tk[2]}: \".$t.\" {$tk[1]}\", PHP_EOL;\n  }\n  else echo $tk, PHP_EOL;\n});\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
