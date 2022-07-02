// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments_001.phpt
  it("Argument parsing error #001", function () {
    expect(() => parser.parseCode("<?php\nfunction foo($arg1 string) {}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
