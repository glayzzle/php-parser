// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_08.phpt
  it("Unmixed group use declarations mustn't contain two commas mid-list", function () {
    expect(() => parser.parseCode("<?php\nuse const Baz\\{Foo,,Bar};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
