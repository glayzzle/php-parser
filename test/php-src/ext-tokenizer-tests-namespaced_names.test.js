// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/namespaced_names.phpt
  it("Tokenization of namespaced names", function () {
    expect(parser.parseCode("<?php\n$code = <<<'CODE'\n<?php\nFoo\nFoo\\Bar\n\\Foo\\Bar\nnamespace\\Foo\nFoo \\ Bar\nCODE;\nforeach (PhpToken::tokenize($code) as $token) {\n    echo \"{$token->getTokenName()}: \\\"$token->text\\\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
