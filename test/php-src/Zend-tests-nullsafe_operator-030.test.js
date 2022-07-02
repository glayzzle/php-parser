// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/030.phpt
  it("Empty on nullsafe method", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method($value) {\n        return $value;\n    }\n}\n$null = null;\nvar_dump(empty($null?->method()));\n$test = new Test;\nvar_dump(empty($test?->method(false)));\nvar_dump(empty($test?->method(42)));\n?>")).toMatchSnapshot();
  });
});
