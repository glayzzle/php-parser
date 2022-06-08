// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_051.phpt
  it("JIT ASSIGN: incorrect assignment optimization", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $a) {\n    $arr = $a[] = (y);\n    $arr = y;\n    $c = $y = $arr = &y($c);\n}\nfoo(0);\n?>")).toMatchSnapshot();
  });
});
