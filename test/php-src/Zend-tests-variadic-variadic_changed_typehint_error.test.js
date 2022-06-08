// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/variadic_changed_typehint_error.phpt
  it("Typehints for variadic arguments have to be compatible", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, string ...$params);\n}\nclass MySQL implements DB {\n    public function query($query, int ...$params) { }\n}\n?>")).toMatchSnapshot();
  });
});
