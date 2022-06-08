// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/contravariant_nullable_return_fails.phpt
  it("Return type cannot add nullability (contravariance)", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function method(): int;\n}\ninterface B extends A {\n    function method(): ?int;\n}\n?>")).toMatchSnapshot();
  });
});
