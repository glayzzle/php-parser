// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/mixed/casting/mixed_cast_error.phpt
  it("Test that a mixed casting is not supported", function () {
    expect(() => parser.parseCode("<?php\n$foo = (mixed) 12;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
