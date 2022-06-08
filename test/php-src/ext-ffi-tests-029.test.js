// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/029.phpt
  it("FFI 029: _Alignas", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(\"\n    typedef char t1;\n    typedef char _Alignas(int) t2;\n\");\nvar_dump(FFI::sizeof($ffi->new(\"struct {char a; t1 b;}\")));\nvar_dump(FFI::sizeof($ffi->new(\"struct {char a; t2 b;}\")));\n?>")).toMatchSnapshot();
  });
});
