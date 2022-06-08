// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_parameter_inheritance_success6.phpt
  it("Test that a parameter of a union of all built-in types can be overridden by the mixed type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(bool|int|float|string|array|object|null $a) {}\n}\nclass Bar extends Foo\n{\n    public function method(mixed $a) {}\n}\n?>")).toMatchSnapshot();
  });
});
