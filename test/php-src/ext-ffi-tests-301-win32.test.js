// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/301-win32.phpt
  it("FFI 301: FFI loading on Windows", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$fn = __DIR__ . \"/300-win32.h\";\n$cont = str_replace(\n        \"PHP_DLL_NAME\",\n        ffi_get_php_dll_name(),\n        file_get_contents(\"$fn.in\")\n    );\nfile_put_contents($fn, $cont);\n$ffi = FFI::load($fn);\n$ffi->php_printf(\"Hello World from %s!\\n\", \"PHP\");\n?>")).toMatchSnapshot();
  });
});
