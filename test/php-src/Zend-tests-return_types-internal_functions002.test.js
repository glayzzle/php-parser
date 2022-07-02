// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/internal_functions002.phpt
  it("Return type for internal functions 2", function () {
    expect(parser.parseCode("<?php\nzend_test_nullable_array_return();\n?>\n==DONE==")).toMatchSnapshot();
  });
});
