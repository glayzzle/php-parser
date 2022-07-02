// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_parameter_inheritance_success7.phpt
  it("Test that a parameter of a union type of classes can be overridden by the mixed type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public function method(stdClass|Foo $a) {}\n}\nclass Bar extends Foo\n{\n    public function method(mixed $a) {}\n}\n?>")).toMatchSnapshot();
  });
});
