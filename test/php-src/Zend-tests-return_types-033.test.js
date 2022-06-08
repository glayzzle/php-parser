// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/033.phpt
  it("__set can only declare void return", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __set($name, $value) : string {}\n}\n?>")).toMatchSnapshot();
  });
});
