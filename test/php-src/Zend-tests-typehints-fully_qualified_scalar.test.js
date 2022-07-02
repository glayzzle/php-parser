// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/typehints/fully_qualified_scalar.phpt
  it("Fully qualified (leading backslash) type names must fail", function () {
    expect(parser.parseCode("<?php\nfunction foo(\\int $foo) {\n    var_dump($foo);\n}\nfoo(1);\n?>")).toMatchSnapshot();
  });
});
