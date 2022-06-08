// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/copy_tmp_002.phpt
  it("JIT COPY_TMP: 002", function () {
    expect(parser.parseCode("<?php\n$x[~\"abc\"] ??= 0;\n?>\nDONE")).toMatchSnapshot();
  });
});
