// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_parameter_inheritance_success2.phpt
  it("Test that a mixed parameter type can be overridden by no type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(mixed $a) {}\n}\nclass Bar extends Foo\n{\n    public function method($a) {}\n}\n?>")).toMatchSnapshot();
  });
});
