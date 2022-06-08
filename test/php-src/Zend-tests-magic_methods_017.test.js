// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_017.phpt
  it("__callStatic first parameter should be a string typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static function __callStatic(int $name, array $arguments) {}\n}\n?>")).toMatchSnapshot();
  });
});
