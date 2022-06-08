// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_rw_002.phpt
  it("JIT FETCH_DIM_RW: 002", function () {
    expect(parser.parseCode("<?php\n$a = [];\n$k = \"0\";\n$a[$k]++;\nvar_dump($a[$k]);\n?>")).toMatchSnapshot();
  });
});
