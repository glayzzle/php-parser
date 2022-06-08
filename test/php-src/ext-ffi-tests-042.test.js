// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/042.phpt
  it("FFI 042: Next array element", function () {
    expect(parser.parseCode("<?php\n$a = FFI::new(\"uint8_t[8]\");\n$a[] = 0;\n?>")).toMatchSnapshot();
  });
});
