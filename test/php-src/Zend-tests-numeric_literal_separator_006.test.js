// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/numeric_literal_separator_006.phpt
  it("Invalid use: underscore next to 0x", function () {
    expect(() => parser.parseCode("<?php\n0x_0123;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
