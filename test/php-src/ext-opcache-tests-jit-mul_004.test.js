// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_004.phpt
  it("JIT MUL: 004 Overflow check for optmizing MUL to SHIFT", function () {
    expect(parser.parseCode("<?php\nfunction mul2_8(int $a) {\n  $res = $a * 8;  // shift cnt: 3\n  var_dump($res);\n}\nfunction mul1_16(int $a) {\n  $res = 16 * $a; // shift cnt: 4\n  var_dump($res);\n}\nfunction mul2_big_int32(int $a) {\n  $res = $a * 0x10000000; // shift cnt: 29\n  var_dump($res);\n}\nfunction mul2_big_int64(int $a) {\n  $res = $a * 0x100000000; // shift cnt: 32\n  var_dump($res);\n}\nfunction mul2(int $a) {\n  $res = $a * 2; // $a + $a\n  var_dump($res);\n}\nmul2_8(3);\nmul2_8(-11);\nmul2_8(0x7fffffffffffffff);\nmul1_16(3);\nmul1_16(-13);\nmul1_16(0x7fffffffffffffff);\nmul2_big_int32(3);\nmul2_big_int32(-3);\nmul2_big_int32(0x10000000000);\nmul2_big_int64(3);\nmul2_big_int64(-3);\nmul2_big_int64(0x100000000);\nmul2(10);\nmul2(0x7fffffffffffffff);\n?>")).toMatchSnapshot();
  });
});
