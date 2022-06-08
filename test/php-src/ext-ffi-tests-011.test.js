// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/011.phpt
  it("FFI 011: cast()", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"uint8_t[4]\");\n$a[0] = 255;\n$a[1] = 255;\nvar_dump(FFI::cast(\"uint16_t[2]\", $a));\n?>")).toMatchSnapshot();
  });
});
