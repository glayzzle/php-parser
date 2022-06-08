// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance002.phpt
  it("Return type covariance; extends abstract class", function () {
    expect(parser.parseCode("<?php\nabstract class A {\n    abstract function foo(): A;\n}\nclass B extends A {\n    function foo(): stdClass {}\n}\n?>")).toMatchSnapshot();
  });
});
