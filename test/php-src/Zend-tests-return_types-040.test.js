// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/040.phpt
  it("__sleep can only declare return as array", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __sleep(): bool|int {}\n}\n?>")).toMatchSnapshot();
  });
});
