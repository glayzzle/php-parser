// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/alternative_offset_syntax_compile_error_in_const_expr.phpt
  it("Alternative offset syntax should emit E_COMPILE_ERROR in const expression", function () {
    expect(parser.parseCode("<?php\nconst FOO_COMPILE_ERROR = \"BAR\"{0};\nvar_dump(FOO_COMPILE_ERROR);\n?>")).toMatchSnapshot();
  });
});
