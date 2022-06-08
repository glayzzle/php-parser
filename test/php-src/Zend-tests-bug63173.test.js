// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63173.phpt
  it("Bug #63173: Crash when invoking invalid array callback", function () {
    expect(parser.parseCode("<?php\n// the important part here are the indexes 1 and 2\n$callback = [1 => 0, 2 => 0];\n$callback();\n?>")).toMatchSnapshot();
  });
});
