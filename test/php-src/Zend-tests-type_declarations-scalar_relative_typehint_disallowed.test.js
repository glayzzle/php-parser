// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/scalar_relative_typehint_disallowed.phpt
  it("Scalar type - disallow relative types", function () {
    expect(parser.parseCode("<?php\nfunction foo(bar\\int $a): int {\n    return $a;\n}\nfoo(10);\n?>")).toMatchSnapshot();
  });
});
