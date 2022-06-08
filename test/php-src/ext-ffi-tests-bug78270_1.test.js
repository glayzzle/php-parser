// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78270_1.phpt
  it("FR #78270 (Usage of __vectorcall convention with FFI)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$ffi = FFI::cdef(<<<EOC\n    __vectorcall int bug78270(const char *str, size_t str_len);\nEOC, \"php_zend_test.dll\");\nvar_dump($ffi->bug78270(\"17.4\", 4));\n?>")).toMatchSnapshot();
  });
});
