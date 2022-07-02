// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/references.phpt
  it("Check that reference detection works properly", function () {
    expect(parser.parseCode("<?php\n$v00 = $v01 = $v32 = $v33 = 0;\ntest(p32: $v32, p33: $v33, p00: $v00, p01: $v01);\necho \"$v00 $v01 $v32 $v33\\n\";\n$v = [0 => 0, 1 => 0, 32 => 0, 33 => 0];\ntest(p32: $v[32], p33: $v[33], p00: $v[0], p01: $v[1]);\necho \"$v[0] $v[1] $v[32] $v[33]\\n\";\nfunction test(\n    &$p00 = null, $p01 = null, &$p02 = null, $p03 = null, &$p04 = null, $p05 = null,\n    &$p06 = null, $p07 = null, &$p08 = null, $p09 = null, &$p10 = null, $p11 = null,\n    &$p12 = null, $p13 = null, &$p14 = null, $p15 = null, &$p16 = null, $p17 = null,\n    &$p18 = null, $p19 = null, &$p20 = null, $p21 = null, &$p22 = null, $p23 = null,\n    &$p24 = null, $p25 = null, &$p26 = null, $p27 = null, &$p28 = null, $p29 = null,\n    &$p30 = null, $p31 = null, &$p32 = null, $p33 = null, &$p34 = null, $p35 = null\n) {\n    $p00++;\n    $p32++;\n}\n$v00 = $v01 = $v32 = $v33 = 0;\ntest(p32: $v32, p33: $v33, p00: $v00, p01: $v01);\necho \"$v00 $v01 $v32 $v33\\n\";\n$v = [0 => 0, 1 => 0, 32 => 0, 33 => 0];\ntest(p32: $v[32], p33: $v[33], p00: $v[0], p01: $v[1]);\necho \"$v[0] $v[1] $v[32] $v[33]\\n\";\n?>")).toMatchSnapshot();
  });
});
