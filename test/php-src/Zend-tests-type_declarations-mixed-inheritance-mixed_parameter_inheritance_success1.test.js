// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_parameter_inheritance_success1.phpt
  it("Test that a mixed parameter type supports invariance", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(mixed $a) {}\n}\nclass Bar extends Foo\n{\n    public function method(mixed $a) {}\n}\n?>")).toMatchSnapshot();
  });
});
