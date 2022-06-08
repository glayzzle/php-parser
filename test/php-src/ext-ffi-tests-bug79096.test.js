// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79096.phpt
  it("Bug #79096 (FFI Struct Segfault)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$header = <<<HEADER\nstruct bug79096 {\n    uint64_t a;\n    uint64_t b;\n};\nstruct bug79096 bug79096(void);\nHEADER;\nif (PHP_OS_FAMILY !== 'Windows') {\n    $ffi = FFI::cdef($header);\n} else {\n    try {\n        $ffi = FFI::cdef($header, 'php_zend_test.dll');\n    } catch (FFI\\Exception $ex) {\n        $ffi = FFI::cdef($header, ffi_get_php_dll_name());\n    }\n}\n$struct = $ffi->bug79096();\nvar_dump($struct);\n?>")).toMatchSnapshot();
  });
});
