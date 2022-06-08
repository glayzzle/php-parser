// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_020.phpt
  it("__set_state first parameter must be an array", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static function __set_state(int $properties) {}\n}\n?>")).toMatchSnapshot();
  });
});
