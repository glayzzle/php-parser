// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_005.phpt
  it("JIT ASSIGN_OP: 005", function () {
    expect(parser.parseCode("<?php\n$a = [\"xy\" => 0];\n$x = \"\";\n$a[\"x{$x}y\"] %= 0;\n?>")).toMatchSnapshot();
  });
});
