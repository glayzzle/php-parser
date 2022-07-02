// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/call_with_only_comma_error.phpt
  it("Single comma in function calls is not allowed", function () {
    expect(() => parser.parseCode("<?php\nfoo(,);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
