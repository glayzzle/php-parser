// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/019.phpt
  it("__clone can only declare void return", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __clone() : Foo {}\n}\n?>")).toMatchSnapshot();
  });
});
