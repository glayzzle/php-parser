// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_037.phpt
  it("JIT ASSIGN: Assign refcounted string (with result)", function () {
    expect(parser.parseCode("<?php\n$n = 2;\n$a = $b = str_repeat('a', $n);\nvar_dump($a, $b);\n?>")).toMatchSnapshot();
  });
});
