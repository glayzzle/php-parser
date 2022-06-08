// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_final_constructor.phpt
  it("Check that the PhpToken constructor is final", function () {
    expect(parser.parseCode("<?php\nclass MyPhpToken extends PhpToken {\n    public function __construct() {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
