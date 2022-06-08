// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/006.phpt
  it("FFI 006: Pointer assignment", function () {
    expect(parser.parseCode("<?php\n$v = FFI::new(\"int*[2]\");\n$v[1] = FFI::new(\"int[1]\", false);\n$v[1][0] = 42;\nvar_dump($v);\nFFI::free($v[1]);\nvar_dump($v);\n?>")).toMatchSnapshot();
  });
});
