// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_010.phpt
  it("JIT FETCH_DIM_R: 010", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    $GLOBALS['a'] = 0;\n});\n$a = [$y];\n($a[$b]);\n?>\nDONE")).toMatchSnapshot();
  });
});
