// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_011.phpt
  it("JIT ASSIGN_DIM: 011", function () {
    expect(parser.parseCode("<?php\n$my_var = null < \nset_error_handler(function($code, $msg) use(&$my_var) {\n\techo \"Err: $msg\\n\";\n    $my_var[] = $my_var = 0;\n});\ntry {\n    $my_var[] = \"\";\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
