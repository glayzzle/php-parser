// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/037.phpt
  it("__debugInfo can only declare array as return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __debugInfo(): bool {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
