// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_003.phpt
  it("JIT ASSIGN_DIM_OP: Undefined variable variation", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$a[] &= $b;\n?>")).toMatchSnapshot();
  });
});
