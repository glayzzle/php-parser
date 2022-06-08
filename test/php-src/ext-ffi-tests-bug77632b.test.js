// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug77632b.phpt
  it("Bug #77632 (FFI function pointers with variadics)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$libc = FFI::cdef(\"extern size_t (*zend_printf)(const char *format, ...);\", ffi_get_php_dll_name());\n$args = [\"test from zend_printf\\n\"];\n($libc->zend_printf)(...$args);\n$args2 = [\"Hello, %s from zend_printf\\n\", \"world\"];\n($libc->zend_printf)(...$args2);\n?>")).toMatchSnapshot();
  });
});
