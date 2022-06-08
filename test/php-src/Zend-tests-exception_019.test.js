// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_019.phpt
  it("Testing throw exception doesn't crash with wrong params, variant 2", function () {
    expect(parser.parseCode("<?php\nthrow new Exception(new stdClass);\n?>")).toMatchSnapshot();
  });
});
