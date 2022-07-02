// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/032.phpt
  it("Nullable return type inheritance rules (nullable and non-nullable)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function foo(): ?int {}\n}\nclass B extends A {\n    function foo(): int {}\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
