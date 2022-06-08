// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_008.phpt
  it("Invalid use: underscore left of e", function () {
    expect(() => parser.parseCode("<?php\n1_e2;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
