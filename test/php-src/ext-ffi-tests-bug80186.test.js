// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug80186.phpt
  it("Bug #80186 (Segfault when iterating over FFI object)", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef('typedef int dummy;');\nforeach ($ffi as $_) { }\nforeach ($ffi as &$_) { }\n?>\n===DONE===")).toMatchSnapshot();
  });
});
