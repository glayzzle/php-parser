// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/bug71978.phpt
  it("Bug #71978 (Existence of return type hint affects other compatibility rules)", function () {
    expect(parser.parseCode("<?php\nclass A1 {\n    function foo(int $a): int {}\n}\nclass B1 extends A1 {\n    function foo(string $a): int {}\n}\n?>")).toMatchSnapshot();
  });
});
