// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throwable_001.phpt
  it("Test using an Error as the previous Throwable for an Exception", function () {
    expect(parser.parseCode("<?php\nthrow new Exception('Exception message', 0, new Error('Error message'));\n?>")).toMatchSnapshot();
  });
});
