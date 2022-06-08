// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/token_get_all_TOKEN_PARSE_001.phpt
  it("Semi reserved words support: member access", function () {
    expect(parser.parseCode("<?php\n$tokens = token_get_all('<?php\nX::continue;\nX::$continue;\n$x->$continue;\nX::continue();\n$x->continue();\nX::class;\n$x->__halt_compiler();\nclass X {\n    const CONTINUE = 1;\n    public $x = self::CONTINUE + 1;\n}\n', TOKEN_PARSE);\narray_walk($tokens, function($tk) {\n  if(is_array($tk)) {\n    if(($t = token_name($tk[0])) == 'T_WHITESPACE') return;\n    echo \"L{$tk[2]}: \".$t.\" {$tk[1]}\", PHP_EOL;\n  }\n  else echo $tk, PHP_EOL;\n});\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
