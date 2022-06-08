// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_001.phpt
  it("JIT CMP: 001", function () {
    expect(parser.parseCode("<?php\n$a = 0;\n$b = 0.0;\nvar_dump($a < $b);\nvar_dump($a > $b);\nvar_dump($a <= $b);\nvar_dump($a >= $b);\n?>")).toMatchSnapshot();
  });
});
