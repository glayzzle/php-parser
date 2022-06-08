// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/018.phpt
  it("Test nullsafe on undefined variable", function () {
    expect(parser.parseCode("<?php\nvar_dump($foo?->bar);\nvar_dump($foo?->bar());\nvar_dump($foo);\n?>")).toMatchSnapshot();
  });
});
