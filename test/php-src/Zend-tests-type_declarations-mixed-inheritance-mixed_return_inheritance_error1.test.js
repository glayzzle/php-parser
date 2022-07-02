// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_return_inheritance_error1.phpt
  it("Test that a mixed return type can't be overridden by the void type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(): mixed {}\n}\nclass Bar extends Foo\n{\n    public function method(): void {}\n}\n?>")).toMatchSnapshot();
  });
});
