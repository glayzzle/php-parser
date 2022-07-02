// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/inheritance/mixed_property_inheritance_error4.phpt
  it("Test that a property of mixed type can't be overridden by a property of a union type", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public mixed $property1;\n}\nclass Bar extends Foo\n{\n    public bool|int|float|string|array|object|null $property1;\n}\n?>")).toMatchSnapshot();
  });
});
