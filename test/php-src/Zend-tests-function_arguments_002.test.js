// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments_002.phpt
  it("Argument parsing error #002", function () {
    expect(() => parser.parseCode("<?php\nfunction foo($arg1/) {}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
