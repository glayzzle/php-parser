// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_002.phpt
  it("Invalid use: trailing underscore", function () {
    expect(() => parser.parseCode("<?php\n100_;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
