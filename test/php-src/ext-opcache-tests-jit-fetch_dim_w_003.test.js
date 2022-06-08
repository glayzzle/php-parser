// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_w_003.phpt
  it("JIT FETCH_DIM_W: 003", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n    $GLOBALS['a']='';\n});\n$a[3E44]='';\n?>\nDONE")).toMatchSnapshot();
  });
});
