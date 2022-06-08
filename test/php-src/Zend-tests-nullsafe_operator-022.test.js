// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/022.phpt
  it("Test nullsafe in unset", function () {
    expect(parser.parseCode("<?php\n$foo = null;\nunset($foo?->bar->baz);\n?>")).toMatchSnapshot();
  });
});
