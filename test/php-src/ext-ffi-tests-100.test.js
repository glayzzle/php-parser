// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/100.phpt
  it("FFI 100: PHP symbols", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$fastcall = ffi_get_fastcall_specifier();\n$zend = ffi_cdef(\"\n    const char *get_zend_version(void);\n    //char *get_zend_version(void);\n    extern size_t (*zend_printf)(const char *format, ...);\n    unsigned long $fastcall zend_hash_func(const char *str, size_t len);\n    void $fastcall zend_str_tolower(char *str, size_t length);\n\", ffi_get_php_dll_name());\nvar_dump(trim(explode(\"\\n\",$zend->get_zend_version())[0]));\n//var_dump(trim(FFI::string($zend->get_zend_version())));\nvar_dump($zend->zend_printf);\nvar_dump(($zend->zend_printf)(\"Hello %s!\\n\", \"World\"));\nvar_dump($zend->zend_hash_func(\"file\", strlen(\"file\")));\n$str = $zend->new(\"char[16]\");\nFFI::memcpy($str, \"Hello World!\", strlen(\"Hello World!\"));\n$zend->zend_str_tolower($str, strlen(\"Hello World!\"));\nvar_dump(FFI::string($str));\n?>")).toMatchSnapshot();
  });
});
