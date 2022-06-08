// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_parameter_error2.phpt
  it("Test that the nullable mixed parameter type is not valid even though a null default value", function () {
    expect(parser.parseCode("<?php\nfunction foo(?mixed $a = null)\n{\n}\n?>")).toMatchSnapshot();
  });
});
