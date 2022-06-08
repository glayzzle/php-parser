// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/043.phpt
  it("FFI 043: Type redeclaration", function () {
    expect(parser.parseCode("<?php\nFFI::cdef(\"\ntypedef int a;\ntypedef unsigned int a;\n\");\n?>")).toMatchSnapshot();
  });
});
