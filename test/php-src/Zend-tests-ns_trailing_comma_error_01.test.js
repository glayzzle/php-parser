// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_01.phpt
  it("Group use declarations mustn't be empty", function () {
    expect(() => parser.parseCode("<?php\nuse Baz\\{};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
