// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/rope_002.phpt
  it("JIT ROPE: 002 type guards are only checked for strings", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\t$a = 0;\n    for ($cnt = 0; $cnt < 6; $cnt++) {\n        $array[] = &$y;\n        $S[\"$array[$a] $y\"] = $a += $y;\n     }\n}\nfoo();\n?>\nDONE")).toMatchSnapshot();
  });
});
