// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78543.phpt
  it("Bug #78543 (is_callable() on FFI\\CData throws Exception)", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(' struct test { int dummy; }; ');\n$test = $ffi->new('struct test');\nvar_dump(is_callable($test));\n?>")).toMatchSnapshot();
  });
});
