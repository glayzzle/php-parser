// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/301.phpt
  it("FFI 301: FFI loading", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::load(__DIR__ . \"/300.h\");\n$ffi->printf(\"Hello World from %s!\\n\", \"PHP\");\n?>")).toMatchSnapshot();
  });
});
