// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/syntax/mixed_void_return_error.phpt
  it("Test that the mixed|void return type is not valid", function () {
    expect(parser.parseCode("<?php\nfunction foo(): mixed|void\n{\n    return null;\n}\n?>")).toMatchSnapshot();
  });
});
