// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/009.phpt
  it("FFI 009: memcpy(), memcmp(), memset() and sizeof()", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[3]\");\n$a[1] = 10;\n$a[2] = 20;\n$b = FFI::new(\"int[4]\");\nvar_dump(FFI::memcmp($b, $a, FFI::sizeof($a)));\nFFI::memcpy($b, $a, FFI::sizeof($a));\nvar_dump($b);\nvar_dump(FFI::memcmp($b, $a, FFI::sizeof($a)));\nFFI::memset($a, -1, FFI::sizeof($a));\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
