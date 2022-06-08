// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_044.phpt
  it("JIT ASSIGN: DASM_S_RANGE_VREG error", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    if ($x) {\n        unknown($value);\n    }\n    var_dump($value = INF);\n}\ntest(false);\n?>")).toMatchSnapshot();
  });
});
