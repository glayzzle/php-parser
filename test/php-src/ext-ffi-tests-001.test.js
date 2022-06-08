// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/001.phpt
  it("FFI 001: Check if FFI is loaded", function () {
    expect(parser.parseCode("<?php\necho 'The extension \"FFI\" is available';\n?>")).toMatchSnapshot();
  });
});
