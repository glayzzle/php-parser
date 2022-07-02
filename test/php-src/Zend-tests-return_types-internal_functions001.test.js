// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/internal_functions001.phpt
  it("Return type for internal functions", function () {
    expect(parser.parseCode("<?php\nzend_test_array_return();\n?>")).toMatchSnapshot();
  });
});
