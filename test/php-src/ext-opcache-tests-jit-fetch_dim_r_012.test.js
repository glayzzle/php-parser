// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_r_012.phpt
  it("JIT FETCH_DIM_R: 012", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\t$a = 0; $a1 = []; $a2 = [];\n    for($i = 0; $i < 6; $i++) {\n        $a1[] = &$y;\n        $a2[\"$a1[$a] \"] = $a += $y;\n    }\n    var_dump($a1, $a2);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
