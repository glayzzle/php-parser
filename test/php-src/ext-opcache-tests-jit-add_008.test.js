// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_008.phpt
  it("JIT ADD: 008 Addition with reference IS_VAR", function () {
    expect(parser.parseCode("<?php\n($a =& $b) + ($a = 1);\n?>\nDONE")).toMatchSnapshot();
  });
});
