// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_050.phpt
  it("JIT ASSIGN: incorrect type store elimination", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    $b = $a;\n    $b =! $a = $a + $b & $b & $b = $b = $a = $a + $b & $a += $a;\n    $b = $b = $a = $a + $b & $b & $b = $a = $a + $b = $b = $a = $a + $b = $a += $a;\n}\nfor ($i = 0; $i < 3; $i++) {\n    @foo(39087589046889428661);\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
