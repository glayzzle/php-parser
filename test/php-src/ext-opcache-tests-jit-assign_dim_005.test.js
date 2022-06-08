// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_005.phpt
  it("JIT ASSIGN_DIM: 005", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function ($code, $msg) {\n\techo \"Error: $msg\\n\";\n    $GLOBALS['a'] = null;\n});\n$a[$c] =                                                                                                                                    \n$a[$c] = 'x' ;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
