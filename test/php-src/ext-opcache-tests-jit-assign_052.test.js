// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_052.phpt
  it("JIT ASSIGN: incorrect reference counting", function () {
    expect(parser.parseCode("<?php\nfunction foo(){\n    for($cnt = 0; $cnt < 6; $cnt++) {\n        $t[$i = $s][] = [] > $n[$i = $j] = $s = $a . $a = $f;\n    }\n}\n@foo();\n?>\nDONE")).toMatchSnapshot();
  });
});
