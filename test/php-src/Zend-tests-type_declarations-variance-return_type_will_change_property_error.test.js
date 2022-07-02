// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/return_type_will_change_property_error.phpt
  it("Test that the ReturnTypeWillChange attribute cannot be used with functions", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    #[ReturnTypeWillChange]\n    public int $bar;\n}\n?>")).toMatchSnapshot();
  });
});
