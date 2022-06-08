// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_trailing_comma_error_07.phpt
  it("Unmixed group use declarations mustn't begin with a comma", function () {
    expect(() => parser.parseCode("<?php\nuse function Baz\\{,Foo};\n?>")).toThrowErrorMatchingSnapshot();
  });
});
