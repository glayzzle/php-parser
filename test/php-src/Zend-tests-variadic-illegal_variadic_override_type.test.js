// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/illegal_variadic_override_type.phpt
  it("Illegal variadic inheritance due to type mismatch", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test(int $a, int $b) {}\n}\nclass B extends A {\n    public function test(string ...$args) {}\n}\n?>")).toMatchSnapshot();
  });
});
