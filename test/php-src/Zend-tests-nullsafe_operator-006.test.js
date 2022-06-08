// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/006.phpt
  it("Test nullsafe property post increment", function () {
    expect(parser.parseCode("<?php\n$foo = null;\n++$foo?->bar;\n?>")).toMatchSnapshot();
  });
});
