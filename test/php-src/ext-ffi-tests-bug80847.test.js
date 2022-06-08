// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug80847.phpt
  it("Bug #80847 (Nested structs)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$header = <<<HEADER\n    typedef struct bug80847_01 {\n        uint64_t b;\n        double c;\n    } bug80847_01;\n    typedef struct bug80847_02 {\n        bug80847_01 a;\n    } bug80847_02;\n\tbug80847_02 ffi_bug80847(bug80847_02 s);\nHEADER;\nif (PHP_OS_FAMILY !== 'Windows') {\n    $ffi = FFI::cdef($header);\n} else {\n    try {\n        $ffi = FFI::cdef($header, 'php_zend_test.dll');\n    } catch (FFI\\Exception $ex) {\n        $ffi = FFI::cdef($header, ffi_get_php_dll_name());\n    }\n}\n$x = $ffi->new('bug80847_02');\n$x->a->b = 42;\n$x->a->c = 42.5;\nvar_dump($x);\n$y = $ffi->ffi_bug80847($x);\nvar_dump($x, $y);\n?>")).toMatchSnapshot();
  });
});
