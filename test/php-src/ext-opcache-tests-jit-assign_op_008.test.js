// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_008.phpt
  it("JIT ASSIGN_OP: 008 Arrays merging with itself", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$a = [];\n    for ($i = 0; $i < 2; $i++) {\n        $a + $a += $a;\n        $a['b'] += 1;\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
