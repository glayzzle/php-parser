// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recv_004.phpt
  it("JIT RECV: default arguments with type checks", function () {
    expect(parser.parseCode("<?php\nfunction test(int $a = 1, int $b = 2)\n{\n\tvar_dump($a, $b);\n}\ntest(3);\n?>")).toMatchSnapshot();
  });
});
