// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/internal_functions003.phpt
  it("Return type for internal functions 3: Void return type", function () {
    expect(parser.parseCode("<?php\nvar_dump(zend_test_void_return());\n?>")).toMatchSnapshot();
  });
});
