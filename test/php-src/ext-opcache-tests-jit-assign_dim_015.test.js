// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_015.phpt
  it("JIT ASSIGN_DIM: 015", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) use (&$my_var) {\n\techo \"Error: $msg\\n\";\n    $my_var = 0;\n});\n$my_var[] = $y;\n?>\nDONE")).toMatchSnapshot();
  });
});
