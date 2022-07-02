// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_parameter_error1.phpt
  it("Test that the mixed parameter type can't be used together with any other type", function () {
    expect(parser.parseCode("<?php\nfunction foo(mixed|int|null $a)\n{\n}\n?>")).toMatchSnapshot();
  });
});
