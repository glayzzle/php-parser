// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_003.phpt
  it("Throwing exception in global scope", function () {
    expect(parser.parseCode("<?php\nthrow new Exception(1);\n?>")).toMatchSnapshot();
  });
});
