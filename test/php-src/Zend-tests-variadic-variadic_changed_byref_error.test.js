// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/variadic_changed_byref_error.phpt
  it("Variadic arguments must have compatible passing modes", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, &...$params);\n}\nclass MySQL implements DB {\n    public function query($query, ...$params) { }\n}\n?>")).toMatchSnapshot();
  });
});
