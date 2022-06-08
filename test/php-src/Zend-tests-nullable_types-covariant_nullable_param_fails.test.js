// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/covariant_nullable_param_fails.phpt
  it("Subtype cannot remove nullable parameter (covariance)", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function method(?int $p);\n}\nclass B implements A {\n    function method(int $p) { }\n}\n?>")).toMatchSnapshot();
  });
});
