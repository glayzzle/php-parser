// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79749.phpt
  it("Bug #79749 (Converting FFI instances to bool fails)", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef('typedef int dummy;');\nvar_dump((bool) $ffi);\nvar_dump((bool) FFI::type('int'));\nvar_dump((bool) FFI::new('int'));\n?>")).toMatchSnapshot();
  });
});
