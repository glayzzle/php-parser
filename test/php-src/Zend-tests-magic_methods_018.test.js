// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_018.phpt
  it("__callStatic second parameter should be an array typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static function __callStatic(string $name, \\Arguments $args) {}\n}\n?>")).toMatchSnapshot();
  });
});
