// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_003.phpt
  it("Invalid use: adjacent underscores", function () {
    expect(() => parser.parseCode("<?php\n10__0;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
