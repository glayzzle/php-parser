// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_003.phpt
  it("JIT ASSIGN_DIM: 003", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump($a[0] = $v);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
