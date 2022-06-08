// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_004.phpt
  it("JIT ASSIGN_DIM_OP: Cyclic dependency", function () {
    expect(parser.parseCode("<?php\n$a = null; \n$a[] .= $a;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
