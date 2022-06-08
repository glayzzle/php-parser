// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug77632.phpt
  it("Bug #77632 (FFI Segfaults When Called With Variadics)", function () {
    expect(parser.parseCode("<?php\n$libc = FFI::cdef(\"int printf(const char *format, ...);\", \"libc.so.6\");\n$args = [\"test\\n\"];\n$libc->printf(...$args);\n?>")).toMatchSnapshot();
  });
});
