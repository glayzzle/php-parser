// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/010.phpt
  it("Test fetch nested nullsafe property by ref", function () {
    expect(parser.parseCode("<?php\n$foo = null;\n$ref = &$foo?->bar->baz;\n?>")).toMatchSnapshot();
  });
});
