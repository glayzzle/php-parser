// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/adding_additional_optional_parameter_error.phpt
  it("Additional optional parameters must have a matching prototype", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, string ...$params);\n}\nclass MySQL implements DB {\n    public function query($query, int $extraParam = null, string ...$params) { }\n}\n?>")).toMatchSnapshot();
  });
});
