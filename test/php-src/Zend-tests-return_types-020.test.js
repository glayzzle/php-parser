// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/020.phpt
  it("Exception thrown from function with return type", function () {
    expect(parser.parseCode("<?php\nfunction test() : array {\n    throw new Exception();\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
