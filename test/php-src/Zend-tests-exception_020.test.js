// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_020.phpt
  it("Test that the original class name is present in the error out when extending ErrorException", function () {
    expect(parser.parseCode("<?php\nclass MyErrorException extends ErrorException{}\nthrow new MyErrorException(new stdClass);\n?>")).toMatchSnapshot();
  });
});
