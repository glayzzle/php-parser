// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cast_002.phpt
  it("JIT CAST: 002", function () {
    expect(parser.parseCode("<?php\nfunction test(?int $i) {\n    $a = (array) $i;\n    $a[-1] = 1;\n    var_dump($a);\n}\ntest(null);\n?>")).toMatchSnapshot();
  });
});
