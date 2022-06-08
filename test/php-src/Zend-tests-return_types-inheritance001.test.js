// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance001.phpt
  it("Return type covariance; extends class", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo(): A {}\n}\nclass B extends A {\n    function foo(): stdClass {}\n}\n?>")).toMatchSnapshot();
  });
});
