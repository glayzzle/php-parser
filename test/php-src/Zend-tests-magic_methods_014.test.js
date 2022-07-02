// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_014.phpt
  it("__unset first parameter should be a string when typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __unset(array $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
