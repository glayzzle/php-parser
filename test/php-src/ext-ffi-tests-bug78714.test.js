// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78714.phpt
  it("Bug #78714 (funcs returning pointer can't use call convention spec)", function () {
    expect(parser.parseCode("<?php\nrequire_once('utils.inc');\n$def = 'char * __cdecl get_zend_version(void);';\n$ffi = ffi_cdef($def, ffi_get_php_dll_name());\necho substr(FFI::string($ffi->get_zend_version()), 0, 4) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
