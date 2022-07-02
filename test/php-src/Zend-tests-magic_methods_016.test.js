// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_016.phpt
  it("__call second parameter should be an array when typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __call(string $name, \\Arguments $arguments) {}\n}\n?>")).toMatchSnapshot();
  });
});
