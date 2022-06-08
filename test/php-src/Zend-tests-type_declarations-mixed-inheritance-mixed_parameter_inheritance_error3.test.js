// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_parameter_inheritance_error3.phpt
  it("Test that a mixed parameter type can't be overridden by a union of all built-in types", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(mixed $a) {}\n}\nclass Bar extends Foo\n{\n    public function method(bool|int|float|string|array|object|null $a) {}\n}\n?>")).toMatchSnapshot();
  });
});
