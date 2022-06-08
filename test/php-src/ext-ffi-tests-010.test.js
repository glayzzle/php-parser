// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/010.phpt
  it("FFI 010: string()", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"int[3]\");\nFFI::memset($a, ord(\"a\"), FFI::sizeof($a));\nvar_dump(FFI::string($a, FFI::sizeof($a)));\n?>")).toMatchSnapshot();
  });
});
