// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_011.phpt
  it("__set first parameter should be a string when typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __set(\\Countable $name, $value) {}\n}\n?>")).toMatchSnapshot();
  });
});
