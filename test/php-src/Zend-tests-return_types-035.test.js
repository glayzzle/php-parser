// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/035.phpt
  it("__unset can only declare void return", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __unset($name) : bool {}\n}\n?>")).toMatchSnapshot();
  });
});
