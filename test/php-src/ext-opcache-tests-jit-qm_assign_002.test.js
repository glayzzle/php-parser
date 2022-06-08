// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/qm_assign_002.phpt
  it("JIT QM_ASSIGN: 002 assign to it self", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 2; $i++) {\n        $a = $a;\n        \"-\" . $b;\n        $b = [];\n        unset($a);\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
