// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/assign_op_001.phpt
  it("ASSIGN_OP 001: Incrrect optimization of ASSIGN_OP may lead to memory leak", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 10; $i++) {\n        $a = $a += $a < true;\n        $a += $a;\n        $a = [];\n        $a['b'] += 1;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
