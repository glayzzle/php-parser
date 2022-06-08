// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_014.phpt
  it("JIT ASSIGN_DIM: 014", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $err) {\n    echo \"Error: $err\\n\";\n    $GLOBALS['a'] = null;\n});\n$a[$y] = function(){};\n?>\nDONE")).toMatchSnapshot();
  });
});
