// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_w_001.phpt
  it("JIT FETCH_DIM_W: 001", function () {
    expect(parser.parseCode("<?php\nfunction &foo() {\n    $a = array(1);\n    return $a[-1];\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
