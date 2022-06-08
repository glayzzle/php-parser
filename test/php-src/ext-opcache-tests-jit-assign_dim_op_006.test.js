// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_op_006.phpt
  it("JIT ASSIGN_DIM_OP 006: Cloberring array be user error handler", function () {
    expect(parser.parseCode("<?php\n$my_var = null;\nset_error_handler(function() use(&$my_var) {\n    $my_var = 0;\n});\n$my_var[0000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000] .= \"xyz\";\nvar_dump($my_var);\n?>")).toMatchSnapshot();
  });
});
