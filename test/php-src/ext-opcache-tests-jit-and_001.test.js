// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/and_001.phpt
  it("JIT BW_AND: 001 (emty string)", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$b = \"\";\n$a[\"\" & $b] *= 3;\n?>\nDONE")).toMatchSnapshot();
  });
});
