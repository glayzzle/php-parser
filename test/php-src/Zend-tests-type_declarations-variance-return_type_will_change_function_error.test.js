// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/return_type_will_change_function_error.phpt
  it("Test that the ReturnTypeWillChange attribute cannot target functions", function () {
    expect(parser.parseCode("<?php\n#[ReturnTypeWillChange]\nfunction foo() {}\n?>")).toMatchSnapshot();
  });
});
