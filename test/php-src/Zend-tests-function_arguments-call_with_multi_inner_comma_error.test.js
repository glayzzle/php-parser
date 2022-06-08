// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/call_with_multi_inner_comma_error.phpt
  it("Multiple inner commas in function calls is not allowed", function () {
    expect(() => parser.parseCode("<?php\nfoo($foo,,$bar);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
