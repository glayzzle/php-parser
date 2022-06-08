// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_003.phpt
  it("JIT MUL: 003 boundary value for optmizing MUL to SHIFT", function () {
    expect(parser.parseCode("<?php\nfunction mul2_bound(int $a) {\n  $res = $a * -2147483648;\n  var_dump($res);\n}\nfunction mul1_bound(int $a) {\n  $res = -2147483648 * $a;\n  var_dump($res);\n}\nmul2_bound(3);\nmul1_bound(3);\n?>")).toMatchSnapshot();
  });
});
