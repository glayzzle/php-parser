// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_009.phpt
  it("Test to check regressions on use statements and lexer state", function () {
    expect(parser.parseCode("<?php\nuse A\\B\\C\\D;\nclass Foo\n{\n    private static $foo;\n}\necho PHP_EOL, \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
