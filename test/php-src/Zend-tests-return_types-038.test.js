// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/038.phpt
  it("__serialize can only declare array as return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __serialize(): \\stdClass {}\n}\n?>")).toMatchSnapshot();
  });
});
