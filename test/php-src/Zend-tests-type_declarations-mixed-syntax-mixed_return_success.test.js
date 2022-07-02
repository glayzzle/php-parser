// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_return_success.phpt
  it("Test that mixed is a valid return type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): mixed\n{\n    return null;\n}\n?>")).toMatchSnapshot();
  });
});
