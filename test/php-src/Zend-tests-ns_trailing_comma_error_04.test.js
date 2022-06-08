// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_04.phpt
  it("Group use declarations mustn't begin with a comma", function () {
    expect(() => parser.parseCode("<?php\nuse Baz\\{,Foo};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
