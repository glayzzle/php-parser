// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_007.phpt
  it("JIT ADD: 007 Addition with immediate values", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    $b = 0;\n    $c = 31;\n    $d = 0xfff;\n    $e = 0x1000;\n    $f = 0xfff000;\n    $g = 0xff001;          // Cannot be encoded into imm12 field\n    $h = 0x1000000;        // Cannot be encoded into imm12 field\n    $i = 0xf12345678;      // Cannot be encoded into imm12 field\n    $j = -31;              // Cannot be encoded into imm12 field\n    $a = $a + $b;\n    $a = $a + $c;\n    $a = $a + $d;\n    $a = $a + $e;\n    $a = $a + $f;\n    $a = $a + $g;\n    $a = $a + $h;\n    $a = $a + $i;\n    $a = $a + $j;\n    var_dump($a);\n}\nfunction bar($a) {\n    $b = 0;\n    $c = 31;\n    $d = 0xfff;\n    $e = 0x1000;\n    $f = 0xfff000;\n    $g = 0xff001;          // Cannot be encoded into imm12 field\n    $h = 0x1000000;        // Cannot be encoded into imm12 field\n    $i = 0xf12345678;      // Cannot be encoded into imm12 field\n    $j = -31;              // Cannot be encoded into imm12 field\n    $a = $a - $b;\n    $a = $a - $c;\n    $a = $a - $d;\n    $a = $a - $e;\n    $a = $a - $f;\n    $a = $a - $g;\n    $a = $a - $h;\n    $a = $a - $i;\n    $a = $a - $j;\n    var_dump($a);\n}\nfoo(42);\nbar(0x1f12345678);\n?>")).toMatchSnapshot();
  });
});
