// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bw_not_001.phpt
  it("JIT BW_NOT: 001 Incorrect refcounting inference", function () {
    expect(parser.parseCode("<?php\n$x[~\"$x\"]*=1;\n?>\nDONE")).toMatchSnapshot();
  });
});
