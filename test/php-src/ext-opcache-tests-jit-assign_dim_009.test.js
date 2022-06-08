// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_009.phpt
  it("JIT ASSIGN_DIM: 009", function () {
    expect(parser.parseCode("<?php\n$y[] = $r = &$G;\n?>\nDONE")).toMatchSnapshot();
  });
});
