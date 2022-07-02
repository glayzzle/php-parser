// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/varSyntax/static_prop_on_int_expr_class.phpt
  it("Static property access on constexpr class evaluating to integer", function () {
    expect(parser.parseCode("<?php\n((int)1)::$b;\n?>")).toMatchSnapshot();
  });
});
