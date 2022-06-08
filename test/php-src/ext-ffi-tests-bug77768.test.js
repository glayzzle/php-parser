// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug77768.phpt
  it("Bug #77768 (Redeclaration of builtin types and repeated declarations)", function () {
    expect(parser.parseCode("<?php\n$x = FFI::cdef(\"\ntypedef __builtin_va_list __gnuc_va_list;\ntypedef unsigned int uint8_t;\ntypedef int64_t a;\ntypedef int64_t b;\ntypedef a c;\ntypedef b c;\nstruct point {int x,y;};\ntypedef struct point d;\ntypedef struct point d;\nint printf(const char *format, ...);\nint printf(const char *format, ...);\n\");\nvar_dump(FFI::sizeof($x->new(\"uint8_t\")));\nvar_dump(FFI::sizeof(FFI::new(\"uint8_t\")));\n?>")).toMatchSnapshot();
  });
});
