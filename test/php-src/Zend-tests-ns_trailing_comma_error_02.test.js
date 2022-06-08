// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_02.phpt
  it("Group use declarations mustn't contain just a comma", function () {
    expect(() => parser.parseCode("<?php\nuse Baz\\{,};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
