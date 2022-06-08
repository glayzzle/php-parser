// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_007.phpt
  it("JIT ASSIGN_DIM: 007", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() {\n\t$GLOBALS['x'] = $GLOBALS['y'];\n});\nfunction x(&$s) {\n\t$s[0] = 1;\n};\n$y = false;\nx($y);\nvar_dump($x,$y);\n?>")).toMatchSnapshot();
  });
});
