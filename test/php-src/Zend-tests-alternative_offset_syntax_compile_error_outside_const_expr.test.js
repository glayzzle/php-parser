// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/alternative_offset_syntax_compile_error_outside_const_expr.phpt
  it("Alternative offset syntax should emit E_COMPILE_ERROR outside const expression", function () {
    expect(parser.parseCode("<?php\n$foo = 'BAR';\nvar_dump($foo{0});\n?>")).toMatchSnapshot();
  });
});
