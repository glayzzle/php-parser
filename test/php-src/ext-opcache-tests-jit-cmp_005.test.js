// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_005.phpt
  it("JIT CMP: 005 Comparisons with immediate values", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    $b = 0;\n    $c = 31;\n    $d = 0xfff;\n    $e = 0x1000;\n    $f = 0xfff000;\n    $g = 0xff001;          // Cannot be encoded into imm12 field\n    $h = 0x1000000;        // Cannot be encoded into imm12 field\n    $i = 0xf12345678;      // Cannot be encoded into imm12 field\n    var_dump($a > $b ? 1 : 0);\n    var_dump($a > $c ? 1 : 0);\n    var_dump($a > $d ? 1 : 0);\n    var_dump($a > $e ? 1 : 0);\n    var_dump($a > $f ? 1 : 0);\n    var_dump($a > $g ? 1 : 0);\n    var_dump($a > $h ? 1 : 0);\n    var_dump($a > $i ? 1 : 0);\n}\nfunction bar($a) {\n    $b = 0;\n    $c = -31;\n    $d = -4095;            // negation of 0xfff\n    $e = -4096;            // negation of 0x1000\n    $f = -16773120;        // negation of 0xfff000\n    $g = -1044481;         // negation of 0xff001\n    $h = -16777216;        // negation of 0x1000000\n    $i = -64729929336;     // negation of 0xf12345678\n    var_dump($a > $b ? 1 : 0);\n    var_dump($a > $c ? 1 : 0);\n    var_dump($a > $d ? 1 : 0);\n    var_dump($a > $e ? 1 : 0);\n    var_dump($a > $f ? 1 : 0);\n    var_dump($a > $g ? 1 : 0);\n    var_dump($a > $h ? 1 : 0);\n    var_dump($a > $i ? 1 : 0);\n}\nfoo(42);\nbar(42);\n?>")).toMatchSnapshot();
  });
});
