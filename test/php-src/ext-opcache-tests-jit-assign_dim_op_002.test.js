// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_002.phpt
  it("JIT ASSIGN_DIM_OP: Undefined variable", function () {
    expect(parser.parseCode("<?php\n$a[] &= 1;\n?>")).toMatchSnapshot();
  });
});
