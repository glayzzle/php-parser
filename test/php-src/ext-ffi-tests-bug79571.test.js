// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79571.phpt
  it("Bug #79571 (FFI: var_dumping unions may segfault)", function () {
    expect(parser.parseCode("<?php\n$ffi = FFI::cdef(<<<EOF\n    typedef union {\n        int num;\n        char *str;\n    } my_union;\nEOF);\n$union = $ffi->new('my_union');\n$union->num = 42;\nvar_dump($union);\nvar_dump($union->num);\n?>")).toMatchSnapshot();
  });
});
