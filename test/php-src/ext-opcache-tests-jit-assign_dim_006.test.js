// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_dim_006.phpt
  it("JIT ASSIGN_DIM: 006", function () {
    expect(parser.parseCode("<?php\nfunction foo($s) {\n    $s = \"123\";\n    for($i = 0; $i < 5; $i++) {\n    \t$x = $s[-5] = \"x\";\n    }\n\tvar_dump($x);\n}\nfoo(\"123\");\n?>")).toMatchSnapshot();
  });
});
