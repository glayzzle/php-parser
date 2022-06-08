// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_property_inheritance_error5.phpt
  it("Test that a property of a built-in type can't be overridden by a property of mixed type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public int $property1;\n}\nclass Bar extends Foo\n{\n    public mixed $property1;\n}\n?>")).toMatchSnapshot();
  });
});
