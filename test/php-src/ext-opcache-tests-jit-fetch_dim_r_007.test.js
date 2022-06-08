// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_007.phpt
  it("JIT FETCH_DIM_R: 007", function () {
    expect(parser.parseCode("<?php\nfunction &test() {\n    $var = [0];\n    return $var;\n}\nvar_dump(test()[0]);\n?>")).toMatchSnapshot();
  });
});
