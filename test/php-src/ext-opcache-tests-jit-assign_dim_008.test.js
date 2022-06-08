// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_008.phpt
  it("JIT ASSIGN_DIM: 008", function () {
    expect(parser.parseCode("<?php\nfunction(int $a) {\n  $arr = $a[] = (y);\n  $arr = y;\n  $c = $y = $arr[] = y($c);\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
