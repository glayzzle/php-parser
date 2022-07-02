// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_006.phpt
  it("Trying to throw a non-object", function () {
    expect(parser.parseCode("<?php\nthrow 1;\n?>")).toMatchSnapshot();
  });
});
