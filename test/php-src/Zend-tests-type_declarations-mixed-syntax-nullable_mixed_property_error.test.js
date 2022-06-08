// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/nullable_mixed_property_error.phpt
  it("Test that the nullable mixed property type is not valid", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    public ?mixed $property1;\n}\n?>")).toMatchSnapshot();
  });
});
