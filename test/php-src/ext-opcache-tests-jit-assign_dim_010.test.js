// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_010.phpt
  it("JIT ASSIGN_DIM: 010", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for($i=0; $i<10; $i++) {\n        $a[] &= $y;\n        $a = null;\n        $a[] =& $y;\n     }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
