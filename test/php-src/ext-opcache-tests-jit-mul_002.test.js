// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_002.phpt
  it("JIT MUL: 002 integer overflow", function () {
    expect(parser.parseCode("<?php\nfunction mul(int $a, int $b) {\n  $res = $a * $b;\n  var_dump($res);\n}\nmul(0x5555555555, 0x5555555555);\n?>")).toMatchSnapshot();
  });
});
