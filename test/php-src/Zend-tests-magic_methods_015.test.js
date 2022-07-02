// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_015.phpt
  it("__call first parameter should be a string typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __call(int $name, array $arguments) {}\n}\n?>")).toMatchSnapshot();
  });
});
