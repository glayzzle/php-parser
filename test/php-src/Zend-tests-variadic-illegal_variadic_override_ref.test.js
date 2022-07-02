// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/illegal_variadic_override_ref.phpt
  it("Illegal variadic inheritance due to reference mismatch", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test(&$a, &$b) {}\n}\nclass B extends A {\n    public function test(...$args) {}\n}\n?>")).toMatchSnapshot();
  });
});
