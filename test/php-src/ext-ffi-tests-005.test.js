// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/005.phpt
  it("FFI 005: Array assignment", function () {
    expect(parser.parseCode("<?php\n$m = FFI::new(\"int[2][2]\");\n$v = FFI::new(\"int[2]\");\n$v[1] = 42;\n$m[1] = $v;\nvar_dump($m);\n?>")).toMatchSnapshot();
  });
});
