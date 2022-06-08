// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_op_004.phpt
  it("JIT ASSIGN_OP: 004", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $a =& $v;\n    $a = 0;\n    $b = 0; \n    for ($i = 0; $i < 10; $i++) {\n        $a *= 64;\n        $b += $a;\n        $a += $b + $a;\n        $a++;\n    }\n}\ntest(); \n?>\nDONE")).toMatchSnapshot();
  });
});
