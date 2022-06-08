// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/033.phpt
  it("FFI 033: FFI::new(), FFI::free(), FFI::type(), FFI::typeof(), FFI::arrayType()", function () {
    expect(parser.parseCode("<?php\n$p1 = FFI::new(\"uint8_t[2]\");\n$p2 = FFI::new(\"uint16_t[2]\", true, true);\nvar_dump($p1, $p2);\n$t1 = FFI::typeof($p1);\nvar_dump($t1);\n$p4 = FFI::new($t1);\nvar_dump($p4);\n$t2 = FFI::type(\"uint16_t[2]\");\nvar_dump($t2);\n$p4 = FFI::new($t2);\nvar_dump($p4);\n$t2 = FFI::type(\"uint32_t\");\nvar_dump($t2);\n$t3 = FFI::arrayType($t2, [2, 2]);\nvar_dump($t3);\n?>")).toMatchSnapshot();
  });
});
