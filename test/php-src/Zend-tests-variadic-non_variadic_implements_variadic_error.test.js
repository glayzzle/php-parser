// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/non_variadic_implements_variadic_error.phpt
  it("It's not possible to turn a variadic function into a non-variadic one", function () {
    expect(parser.parseCode("<?php\ninterface DB {\n    public function query($query, ...$params);\n}\nclass MySQL implements DB {\n    public function query($query, $params) { }\n}\n?>")).toMatchSnapshot();
  });
});
