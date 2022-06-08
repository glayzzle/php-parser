// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_018.phpt
  it("Testing throw exception doesn't crash with wrong params, variant 1", function () {
    expect(parser.parseCode("<?php\nclass Hello extends Exception {}\nthrow new Hello(new stdClass);\n?>")).toMatchSnapshot();
  });
});
