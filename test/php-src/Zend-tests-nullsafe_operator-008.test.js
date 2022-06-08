// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/008.phpt
  it("Test nullsafe property coalesce assignment", function () {
    expect(parser.parseCode("<?php\n$foo = null;\nvar_dump($foo?->bar ??= 'bar');\n?>")).toMatchSnapshot();
  });
});
