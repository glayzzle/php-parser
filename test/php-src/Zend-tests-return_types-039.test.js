// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/039.phpt
  it("__unserialize can only declare void return", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __unserialize(array $data): array {}\n}\n?>")).toMatchSnapshot();
  });
});
