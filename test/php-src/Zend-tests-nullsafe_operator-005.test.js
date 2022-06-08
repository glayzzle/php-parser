// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/005.phpt
  it("Test nullsafe property assignment op", function () {
    expect(parser.parseCode("<?php\n$foo = null;\n$foo?->bar += 1;\n?>")).toMatchSnapshot();
  });
});
