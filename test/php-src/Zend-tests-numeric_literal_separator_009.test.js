// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_009.phpt
  it("Invalid use: underscore right of e", function () {
    expect(() => parser.parseCode("<?php\n1e_2;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
