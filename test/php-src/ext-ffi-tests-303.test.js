// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/303.phpt
  it("FFI 303: FFI preloading flob", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::scope(\"TEST_300\");\n$ffi->printf(\"Hello World from %s!\\n\", \"PHP\");\n?>")).toMatchSnapshot();
  });
});
