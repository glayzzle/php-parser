// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_return_error.phpt
  it("Test that the mixed return type can't be used together with any other type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): mixed|string|null\n{\n    return null;\n}\n?>")).toMatchSnapshot();
  });
});
