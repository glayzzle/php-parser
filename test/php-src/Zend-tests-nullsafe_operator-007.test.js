// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/007.phpt
  it("Test nullsafe property pre increment", function () {
    expect(parser.parseCode("<?php\n$foo = null;\nvar_dump($foo?->bar++);\n?>")).toMatchSnapshot();
  });
});
