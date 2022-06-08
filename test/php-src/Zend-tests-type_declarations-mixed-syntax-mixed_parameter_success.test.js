// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_parameter_success.phpt
  it("Test that mixed is a valid parameter type", function () {
    expect(parser.parseCode("<?php\nfunction foo(mixed $a)\n{\n}\n?>")).toMatchSnapshot();
  });
});
