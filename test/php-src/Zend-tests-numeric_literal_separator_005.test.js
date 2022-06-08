// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_005.phpt
  it("Invalid use: underscore right of period", function () {
    expect(() => parser.parseCode("<?php\n100._0;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
