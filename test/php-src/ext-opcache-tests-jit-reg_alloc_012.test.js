// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_012.phpt
  it("Register Alloction 012: Missed type store", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    $b = $a;\n    $b =! $a = $a + $b & $b & $bb = $a = $a + $b & $a;\n    $a = $a + $b & $b & $b = $a;\n}\nfor ($i = 0; $i < 3; $i++) {\n    @foo(39087589046889428661);\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
