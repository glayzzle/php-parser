// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_constructor.phpt
  it("PhpToken constructor", function () {
    expect(parser.parseCode("<?php\n$token = new PhpToken(300, 'function');\nvar_dump($token);\n$token = new PhpToken(300, 'function', 10);\nvar_dump($token);\n$token = new PhpToken(300, 'function', 10, 100);\nvar_dump($token);\n?>")).toMatchSnapshot();
  });
});
