// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/200.phpt
  it("FFI 200: PHP callbacks", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$zend = FFI::cdef(\"\n    typedef size_t (*zend_write_func_t)(const char *str, size_t str_length);\n    extern zend_write_func_t zend_write;\n\", ffi_get_php_dll_name());\necho \"Hello World!\\n\";\n$orig_zend_write = clone $zend->zend_write;\n$zend->zend_write = function($str, $len) {\n    global $orig_zend_write;\n    $orig_zend_write(\"{\\n\\t\", 3);\n    $ret = $orig_zend_write($str, $len);\n    $orig_zend_write(\"}\\n\", 2);\n    return $ret;\n};\necho \"Hello World!\\n\";\n$zend->zend_write = $orig_zend_write;\necho \"Hello World!\\n\";\n?>")).toMatchSnapshot();
  });
});
