// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_013.phpt
  it("JIT FETCH_DIM_R: 013", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\t$y = 0; $tokens = [];\n    for($cnt = 0; $cnt < 6; $cnt++) {\n        $tokens[$y] > $tokens[$y][] = $y;\n     }\n}\n@foo();\n?>\nDONE")).toMatchSnapshot();
  });
});
