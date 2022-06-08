// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80782.phpt
  it("Bug #80782 (DASM_S_RANGE_VREG on PHP_INT_MIN-1)", function () {
    expect(parser.parseCode("<?php\ndefine('LONG_MIN', PHP_INT_MIN);\nvar_dump(LONG_MIN-1);\n?>")).toMatchSnapshot();
  });
});
