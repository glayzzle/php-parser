// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug79177.phpt
  it("Bug #79177 (FFI doesn't handle well PHP exceptions within callback)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/utils.inc';\n$header = <<<HEADER\nextern int *(*bug79177_cb)(void);\nvoid bug79177(void);\nHEADER;\nif (PHP_OS_FAMILY !== 'Windows') {\n    $ffi = FFI::cdef($header);\n} else {\n    try {\n        $ffi = FFI::cdef($header, 'php_zend_test.dll');\n    } catch (FFI\\Exception $ex) {\n        $ffi = FFI::cdef($header, ffi_get_php_dll_name());\n    }\n}\n$ffi->bug79177_cb = function() {\n    throw new \\RuntimeException('Not allowed');\n};\ntry { \n    $ffi->bug79177(); // this is supposed to raise a fatal error\n} catch (\\Throwable $exception) {}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
