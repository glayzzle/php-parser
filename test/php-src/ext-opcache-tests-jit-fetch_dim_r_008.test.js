// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_008.phpt
  it("JIT FETCH_DIM_R: 008", function () {
    expect(parser.parseCode("<?php\nfunction &test() { return $x; }\ntest()[1];\n?>\nDONE")).toMatchSnapshot();
  });
});
