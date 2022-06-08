// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/covariant_nullable_return_succeds.phpt
  it("Nullable covariant return types", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function method(): ?int;\n}\ninterface B extends A {\n    function method(): int;\n}\n?>")).toMatchSnapshot();
  });
});
