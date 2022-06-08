// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cast_001.phpt
  it("JIT CAST: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo (int $x = null) {\n    $a = (array)$x;\n    $a[] = 42;\n    var_dump($a);\n}\nfoo(null);\n?>")).toMatchSnapshot();
  });
});
