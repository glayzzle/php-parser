// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/static_variance_failure.phpt
  it("Failure case for static variance: Replace static with self", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test(): static {}\n}\nclass B extends A {\n    public function test(): self {}\n}\n?>")).toMatchSnapshot();
  });
});
