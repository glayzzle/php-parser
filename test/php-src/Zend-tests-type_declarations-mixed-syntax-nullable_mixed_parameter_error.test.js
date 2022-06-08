// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/nullable_mixed_parameter_error.phpt
  it("Test that the nullable mixed parameter type is not valid", function () {
    expect(parser.parseCode("<?php\nfunction foo(?mixed $a)\n{\n}\n?>")).toMatchSnapshot();
  });
});
