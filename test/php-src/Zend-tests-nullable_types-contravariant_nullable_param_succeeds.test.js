// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullable_types/contravariant_nullable_param_succeeds.phpt
  it("Subtype can add nullability to a parameter (contravariance)", function () {
    expect(parser.parseCode("<?php\ninterface A {\n    function method(int $p);\n}\nclass B implements A {\n    function method(?int $p) { }\n}\n$b = new B();\n$b->method(null);\n?>")).toMatchSnapshot();
  });
});
