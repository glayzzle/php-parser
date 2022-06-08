// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_rw_001.phpt
  it("JIT FETCH_DIM_RW: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a[0][0] += 2;\n    return $a[0];\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
