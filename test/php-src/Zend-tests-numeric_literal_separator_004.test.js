// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_004.phpt
  it("Invalid use: underscore left of period", function () {
    expect(() => parser.parseCode("<?php\n100_.0;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
