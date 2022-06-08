// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/302.phpt
  it("FFI 302: FFI preloading", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::scope(\"TEST_300\");\n$ffi->printf(\"Hello World from %s!\\n\", \"PHP\");\n?>")).toMatchSnapshot();
  });
});
