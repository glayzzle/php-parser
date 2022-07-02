// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77738.phpt
  it("Bug #77738 (Nullptr deref in zend_compile_expr)", function () {
    expect(parser.parseCode("<?php\n__COMPILER_HALT_OFFSET__;\n; // <- important\n?>")).toMatchSnapshot();
  });
});
