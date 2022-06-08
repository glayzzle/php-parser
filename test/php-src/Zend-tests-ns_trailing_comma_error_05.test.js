// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_05.phpt
  it("Group use declarations mustn't contain two commas mid-list", function () {
    expect(() => parser.parseCode("<?php\nuse Baz\\{Foo,,Bar};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
