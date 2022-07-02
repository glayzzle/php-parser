// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/009.phpt
  it("Test fetch nullsafe property by ref", function () {
    expect(parser.parseCode("<?php\n$foo = null;\n$ref = &$foo?->bar\n?>")).toMatchSnapshot();
  });
});
