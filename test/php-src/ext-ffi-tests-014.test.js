// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/014.phpt
  it("FFI 014: Size of nested types", function () {
    expect(parser.parseCode("<?php\nvar_dump(FFI::sizeof(FFI::new(\"uint32_t[2]\")));\nvar_dump(FFI::sizeof(FFI::new(\"uint32_t([2])\")));\nvar_dump(FFI::sizeof(FFI::new(\"uint32_t([2])[2]\")));\n?>\nok")).toMatchSnapshot();
  });
});
