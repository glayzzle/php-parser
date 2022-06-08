// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_007.phpt
  it("Invalid use: underscore next to 0b", function () {
    expect(() => parser.parseCode("<?php\n0b_0101;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
