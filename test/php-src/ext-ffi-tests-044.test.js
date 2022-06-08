// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/044.phpt
  it("FFI 044: mode attribute", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(\"\ntypedef int a __attribute__ ((__mode__ (__QI__)));\ntypedef unsigned int ua __attribute__ ((__mode__ (__QI__)));\ntypedef int b __attribute__ ((__mode__ (__HI__)));\ntypedef unsigned int ub __attribute__ ((__mode__ (__HI__)));\ntypedef int c __attribute__ ((__mode__ (__SI__)));\ntypedef unsigned int uc __attribute__ ((__mode__ (__SI__)));\ntypedef int d __attribute__ ((__mode__ (__DI__)));\ntypedef unsigned int ud __attribute__ ((__mode__ (__DI__)));\ntypedef float e __attribute__ ((__mode__ (__SF__)));\ntypedef float f __attribute__ ((__mode__ (__DF__)));\n\");\nvar_dump(FFI::sizeof($ffi->new(\"a\")));\nvar_dump(FFI::sizeof($ffi->new(\"ua\")));\nvar_dump(FFI::sizeof($ffi->new(\"b\")));\nvar_dump(FFI::sizeof($ffi->new(\"ub\")));\nvar_dump(FFI::sizeof($ffi->new(\"c\")));\nvar_dump(FFI::sizeof($ffi->new(\"uc\")));\nvar_dump(FFI::sizeof($ffi->new(\"d\")));\nvar_dump(FFI::sizeof($ffi->new(\"ud\")));\nvar_dump(FFI::sizeof($ffi->new(\"e\")));\nvar_dump(FFI::sizeof($ffi->new(\"f\")));\n?>")).toMatchSnapshot();
  });
});
