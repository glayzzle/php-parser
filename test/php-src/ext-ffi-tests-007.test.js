// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/007.phpt
  it("FFI 007: Pointer comparison", function () {
    expect(parser.parseCode("<?php\n$v = FFI::new(\"int*[3]\");\n$v[0] = FFI::new(\"int[1]\", false);\n$v[1] = FFI::new(\"int[1]\", false);\n$v[2] = $v[1];\n$v[1][0] = 42;\nvar_dump($v[0] == $v[1]);\nvar_dump($v[1] == $v[2]);\nFFI::free($v[0]);\nFFI::free($v[1]);\n?>")).toMatchSnapshot();
  });
});
