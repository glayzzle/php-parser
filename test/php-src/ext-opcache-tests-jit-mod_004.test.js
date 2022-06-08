// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_004.phpt
  it("JIT MOD: 004", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$b = \"\";\n$a[\"x{$b}y\"] %= 0;\n?>")).toMatchSnapshot();
  });
});
