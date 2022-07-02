// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/inheritance003.phpt
  it("Return type mismatch; implements interface", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function foo(): A;\n}\nclass B implements A {\n    function foo(): stdClass {}\n}\n?>")).toMatchSnapshot();
  });
});
