// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_06.phpt
  it("Unmixed group use declarations mustn't allow more than one comma", function () {
    expect(() => parser.parseCode("<?php\nuse const Baz\\{Foo,,};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
