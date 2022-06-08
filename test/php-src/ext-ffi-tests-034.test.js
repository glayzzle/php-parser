// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/034.phpt
  it("FFI 034: FFI::typeof(), FFI::sizeof(), FFI::alignof()", function () {
    expect(parser.parseCode("<?php\n$p1 = FFI::new(\"uint8_t[2]\");\n$p2 = FFI::new(\"uint16_t[2]\");\n$p3 = FFI::new(\"uint32_t[2]\");\nvar_dump(FFI::sizeof($p1), FFI::sizeof($p2), FFI::sizeof($p3));\nvar_dump(FFI::alignof($p1), FFI::alignof($p2), FFI::alignof($p3));\nvar_dump(FFI::sizeof(FFI::typeof($p1)), FFI::sizeof(FFI::typeof($p2)), FFI::sizeof(FFI::typeof($p3)));\nvar_dump(FFI::alignof(FFI::typeof($p1)), FFI::alignof(FFI::typeof($p2)), FFI::alignof(FFI::typeof($p3)));\n?>")).toMatchSnapshot();
  });
});
