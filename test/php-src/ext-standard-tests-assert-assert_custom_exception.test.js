// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_custom_exception.phpt
  it("Throwing custom exception object from assert() throws given object", function () {
    expect(parser.parseCode("<?php\nclass CustomException extends Exception {}\nassert(false, new CustomException('Exception message'));\n?>")).toMatchSnapshot();
  });
});
