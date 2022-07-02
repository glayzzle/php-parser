// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/magic_methods_012.phpt
  it("__get first parameter should be a string when typed", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __get(int $name) {}\n}\n?>")).toMatchSnapshot();
  });
});
