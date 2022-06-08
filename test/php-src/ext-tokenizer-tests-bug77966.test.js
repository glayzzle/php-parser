// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/bug77966.phpt
  it("Handling of \"namespace as\" in TOKEN_PARSE mode", function () {
    expect(parser.parseCode("<?php\n$code = <<<'CODE'\n<?php\nclass C {\n    use A {\n        namespace as bar;\n    }\n}\nCODE;\n$tokens = PhpToken::tokenize($code, TOKEN_PARSE);\nforeach ($tokens as $token) {\n    echo \"{$token->getTokenName()}: \\\"$token->text\\\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
