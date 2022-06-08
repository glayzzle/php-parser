// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_w_002.phpt
  it("JIT FETCH_DIM_W: 002", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $b = [&$a[0]];\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
