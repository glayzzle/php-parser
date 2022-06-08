// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79532.phpt
  it("Bug #79532 (sizeof off_t can be wrong)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$header = <<<HEADER\nvoid bug79532(off_t *array, size_t elems);\nHEADER;\nif (PHP_OS_FAMILY !== 'Windows') {\n    $ffi = FFI::cdef($header);\n} else {\n    try {\n        $ffi = FFI::cdef($header, 'php_zend_test.dll');\n    } catch (FFI\\Exception $ex) {\n        $ffi = FFI::cdef($header, ffi_get_php_dll_name());\n    }\n}\n$array = FFI::new(\"off_t[3]\");\n$ffi->bug79532($array, 3);\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
