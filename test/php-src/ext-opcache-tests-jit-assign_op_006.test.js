// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_006.phpt
  it("JIT ASSIGN_OP: 006 concationation with itself", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    for ($i = 0; $i < 2; $i++) {\n        $a .= $a = $a;\n    }\n}\ntest(\"\");\n?>\nDONE")).toMatchSnapshot();
  });
});
