// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_003.phpt
  it("JIT ASSIGN_OP: 003", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a = 0;\n    for ($i = 0; $i < 10; $i++) {\n        $a += $a;\n        $a =& $x;\n        $a += $a;\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
